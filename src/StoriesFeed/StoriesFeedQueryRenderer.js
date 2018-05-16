//@flow

import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../Environment';
import StoriesFeedPaginationContainer from './StoriesFeedPaginationContainer';

type Props = {
  jumpTo: any,
  route: {
    key: string
  }
};

const feedQuery = graphql`
  query StoriesFeedQueryRenderer_Query(
    $count: Int!
    $cursor: String
    $type: FeedType!
  ) {
    ...StoriesFeedPaginationContainer_feed
      @arguments(count: $count, cursor: $cursor, type: $type)
  }
`;

export default class StoriesFeedQueryRenderer extends Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={feedQuery}
        variables={{
          count: 10,
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
            <SafeAreaView style={{ flex: 1 }}>
              <StoriesFeedPaginationContainer
                feed={props}
                type={this.props.route.key}
              />
            </SafeAreaView>
          );
        }}
      />
    );
  }
}
