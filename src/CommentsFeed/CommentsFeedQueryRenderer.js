//@flow

import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { ActivityIndicator } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';

import environment from '../Environment';
import CommentsFeedPaginationContainer from './CommentsFeedPaginationContainer';

type Props = {
  navigation: {
    state: {
      params: {
        storyId: string
      }
    }
  }
};

const feedQuery = graphql`
  query CommentsFeedQueryRenderer_Query($storyId: ID!) {
    node(id: $storyId) {
      ...CommentsFeedPaginationContainer_story
    }
  }
`;

class CommentsFeedQueryRenderer extends Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={feedQuery}
        variables={{
          storyId: this.props.navigation.state.params.storyId
        }}
        render={({ error, props }) => {
          if (error) return null;
          if (!props)
            return (
              <ActivityIndicator
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                size="large"
                color="#ef6f2e"
              />
            );
          return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
              <CommentsFeedPaginationContainer story={props.node} />
            </SafeAreaView>
          );
        }}
      />
    );
  }
}

export default withNavigation(CommentsFeedQueryRenderer);
