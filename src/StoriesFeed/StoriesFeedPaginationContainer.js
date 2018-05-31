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
      !this.props.feed.storyFeed ||
      !this.props.feed.storyFeed.edges
    )
      return <FlatList data={[]} renderItem={() => null} />;

    return (
      <FlatList
        data={this.props.feed.storyFeed.edges}
        keyExtractor={(edge, index) =>
          edge.node ? edge.node.id : String(index)
        }
        refreshing={this.state.isRefreshing}
        onRefresh={() => this._refresh()}
        onEndReached={() => this._loadMore()}
        renderItem={({ item: edge }) =>
          edge.node ? <StoryCard story={edge.node} /> : undefined
        }
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
    ...StoriesFeedPaginationContainer_feed
      @arguments(count: $count, cursor: $cursor, type: $type)
  }
`;

export default createPaginationContainer(
  StoriesFeedPaginationContainer,
  graphql`
    fragment StoriesFeedPaginationContainer_feed on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
        type: { type: "FeedType" }
      ) {
      storyFeed(first: $count, after: $cursor, type: $type)
        @connection(key: "StoriesFeedPaginationContainer_storyFeed") {
        edges {
          cursor
          node {
            id
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
        cursor: props.feed.storyFeed.pageInfo.endCursor,
        type: fragmentVariables.type
      };
    },
    query
  }
);
