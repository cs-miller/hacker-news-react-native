//@flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { graphql, createPaginationContainer } from 'react-relay';

import CommentCard from './CommentCard';

import type { CommentsFeedPaginationContainer_story } from './__generated__/CommentsFeedPaginationContainer_story.graphql';
import type { RelayPaginationProp } from 'react-relay';

type Props = {
  story: CommentsFeedPaginationContainer_story,
  relay: RelayPaginationProp
};

type State = {
  isRefreshing: boolean
};

class CommentsFeedPaginationContainer extends Component<Props, State> {
  state = {
    isRefreshing: false
  };

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) return;

    this.props.relay.loadMore(5);
  }

  _refresh() {
    this.setState({ isRefreshing: true });
    this.props.relay.refetchConnection(10, () =>
      this.setState({ isRefreshing: false })
    );
  }

  render() {
    if (
      !this.props.story ||
      !this.props.story.kids ||
      !this.props.story.kids.edges
    )
      return <FlatList data={[]} renderItem={() => null} />;

    return (
      <FlatList
        data={this.props.story.kids.edges}
        keyExtractor={edge => edge.node.__id}
        refreshing={this.state.isRefreshing}
        onRefresh={() => this._refresh()}
        onEndReached={() => this._loadMore()}
        renderItem={({ item: edge }) => <CommentCard comment={edge.node} />}
      />
    );
  }
}

const query = graphql`
  query CommentsFeedPaginationContainerQuery(
    $count: Int!
    $cursor: String
    $storyId: ID!
  ) {
    node(id: $storyId) {
      ...CommentsFeedPaginationContainer_story
    }
  }
`;

export default createPaginationContainer(
  CommentsFeedPaginationContainer,
  graphql`
    fragment CommentsFeedPaginationContainer_story on Story
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
      id
      by {
        id
        hnId
        created
      }
      text
      title
      url
      kids(first: $count, after: $cursor)
        @connection(key: "CommentsFeedPaginationContainer_kids") {
        edges {
          cursor
          node {
            ...CommentCard_comment
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
        cursor: props.story.kids.pageInfo.endCursor,
        storyId: props.story.id
      };
    },
    query
  }
);
