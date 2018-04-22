//@flow

import React, { Component } from 'react';
import { Card, CardActions, CardContent, Text } from 'react-native-paper';
import { material } from 'react-native-typography';
import { createFragmentContainer, graphql } from 'react-relay';
import { WebBrowser } from 'expo';

import { toBaseURL, fromNow } from '../utils';

import type { StoryCard_story } from './__generated__/StoryCard_story.graphql';

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
            {this.props.story.score}{' '}
            {this.props.story.score === 1 ? 'point' : 'points'} by{' '}
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
