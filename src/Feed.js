//@flow

import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Text, ActivityIndicator } from 'react-native';

import environment from './Environment';
import StoryCard from './StoryCard';

type Props = {
  route: {
    key: string
  }
};

export default class Feed extends Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query FeedQuery($type: FeedType!) {
            storyFeed(type: $type) {
              stories(first: 5) {
                edges {
                  node {
                    ...StoryCard_story
                  }
                }
              }
            }
          }
        `}
        variables={{
          type: this.props.route.key
        }}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error</Text>;
          }
          if (!props) {
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
          }
          return props.storyFeed.stories.edges.map(edge => (
            <StoryCard story={edge.node} key={edge.node.__id} />
          ));
        }}
      />
    );
  }
}
