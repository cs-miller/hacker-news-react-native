//@flow

import React, { Component } from 'react';
import { Card, CardActions, CardContent } from 'react-native-paper';
import { Text } from 'react-native';
import { material } from 'react-native-typography';
import { createFragmentContainer, graphql } from 'react-relay';
import { WebBrowser } from 'expo';
import type { StoryCard_story } from './__generated__/StoryCard_story.graphql';
import { toBaseURL, fromNow } from './utils';

type Props = {
  story: StoryCard_story
};

class StoryCard extends Component<Props> {
  _onPress() {
    if (!this.props.story.url) return;
    WebBrowser.openBrowserAsync(this.props.story.url);
  }

  render() {
    return (
      <Card onPress={() => this._onPress()}>
        <CardContent>
          <Text style={material.subheading}>{this.props.story.title}</Text>
          <Text style={material.caption}>
            {this.props.story.url ? `(${toBaseURL(this.props.story.url)})` : ''}
          </Text>
          <Text style={material.body1}>
            {this.props.story.score} points by{' '}
            <Text>{this.props.story.by.hnId}</Text> |{' '}
            {fromNow(Number(this.props.story.time))}
          </Text>
        </CardContent>
      </Card>
    );
  }
}

export default createFragmentContainer(
  StoryCard,
  graphql`
    fragment StoryCard_story on Story {
      title
      url
      time
      score
      by {
        hnId
      }
    }
  `
);
