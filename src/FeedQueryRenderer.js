//@flow

import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from './Environment';
import FeedPaginationContainer from './FeedPaginationContainer';

type Props = {
  route: {
    key: string
  }
};

const feedQuery = graphql`
  query FeedQueryRenderer_Query($type: FeedType) {
    storyFeed(type: $type) {
      ...FeedPaginationContainer_feed
    }
  }
`;

export default class FeedQueryRenderer extends Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={feedQuery}
        variables={{
          type: this.props.route.key
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
            <FeedPaginationContainer
              feed={props.storyFeed}
              type={this.props.route.key}
            />
          );
        }}
      />
    );
  }
}
