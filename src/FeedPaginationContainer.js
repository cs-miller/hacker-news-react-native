//@flow

import React, { Component } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { graphql, createPaginationContainer } from 'react-relay';

import StoryCard from './StoryCard';

import type { FeedPaginationContainer_feed } from './__generated__/FeedPaginationContainer_feed.graphql';
import type { RelayPaginationProp } from 'react-relay';

type Props = {
  feed: FeedPaginationContainer_feed,
  relay: RelayPaginationProp
};

type State = {
  isRefreshing: boolean
};

class FeedPaginationContainer extends Component<Props, State> {
  state = {
    isRefreshing: false
  };

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(5);
  }

  _refresh() {
    this.setState({ isRefreshing: true });
    this.props.relay.refetchConnection(10, () =>
      this.setState({ isRefreshing: false })
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.feed.stories.edges}
        keyExtractor={edge => edge.node.__id}
        refreshing={this.state.isRefreshing}
        onRefresh={() => this._refresh()}
        onEndReached={() => this._loadMore()}
        renderItem={({ item: edge }) => <StoryCard story={edge.node} />}
      />
    );
  }
}

const query = graphql`
  query FeedPaginationContainerQuery(
    $count: Int!
    $cursor: String
    $type: FeedType!
  ) {
    storyFeed(type: $type) {
      ...FeedPaginationContainer_feed @arguments(count: $count, cursor: $cursor)
    }
  }
`;

export default createPaginationContainer(
  FeedPaginationContainer,
  graphql`
    fragment FeedPaginationContainer_feed on Feed
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
      stories(first: $count, after: $cursor)
        @connection(key: "FeedPaginationContainer_stories") {
        edges {
          cursor
          node {
            ...StoryCard_story
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    direction: 'forward',
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor: props.feed.stories.pageInfo.endCursor,
        type: props.type
      };
    },
    query
  }
);
