//@flow

import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button } from 'react-native-paper';
import { graphql, createPaginationContainer } from 'react-relay';

import StoryCard from './StoryCard';

import type { FeedPaginationContainer_feed } from './__generated__/FeedPaginationContainer_feed.graphql';
import type { RelayPaginationProp } from 'react-relay';

type Props = {
  feed: FeedPaginationContainer_feed,
  relay: RelayPaginationProp
};

class FeedPaginationContainer extends Component<Props> {
  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(1, (...args) => console.log(args));
  }

  render() {
    return (
      <View>
        {this.props.feed.stories.edges.map(edge => (
          <StoryCard story={edge.node} key={edge.node.__id} />
        ))}
        <Button onPress={() => this._loadMore()}>Load More</Button>
      </View>
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
        count: { type: "Int", defaultValue: 3 }
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
