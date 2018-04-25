//@flow

import React, { Component } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { graphql, createPaginationContainer } from 'react-relay';

import StoryCard from './StoryCard';

import type { StoriesFeedPaginationContainer_feed } from './__generated__/StoriesFeedPaginationContainer_feed.graphql';
import type { RelayPaginationProp } from 'react-relay';

type Props = {
  feed: StoriesFeedPaginationContainer_feed,
  relay: RelayPaginationProp
};

type State = {
  isRefreshing: boolean
};

class StoriesFeedPaginationContainer extends Component<Props, State> {
  state = {
    isRefreshing: false
  };

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(10);
  }

  _refresh() {
    this.setState({ isRefreshing: true });
    this.props.relay.refetchConnection(10, () =>
      this.setState({ isRefreshing: false })
    );
  }

  render() {
    if (
      !this.props.feed ||
      !this.props.feed.stories ||
      !this.props.feed.stories.edges
    )
      return <FlatList data={[]} renderItem={() => null} />;

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
  query StoriesFeedPaginationContainerQuery(
    $count: Int!
    $cursor: String
    $type: FeedType!
  ) {
    storyFeed(type: $type) {
      ...StoriesFeedPaginationContainer_feed
        @arguments(count: $count, cursor: $cursor)
    }
  }
`;

export default createPaginationContainer(
  StoriesFeedPaginationContainer,
  graphql`
    fragment StoriesFeedPaginationContainer_feed on Feed
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
      stories(first: $count, after: $cursor)
        @connection(key: "StoriesFeedPaginationContainer_stories") {
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
