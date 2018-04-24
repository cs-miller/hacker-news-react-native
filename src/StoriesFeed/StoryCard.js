//@flow

import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Text,
  Button
} from 'react-native-paper';
import { material } from 'react-native-typography';
import { createFragmentContainer, graphql } from 'react-relay';
import { WebBrowser } from 'expo';

import { toBaseURL, fromNow, usernameColor } from '../utils';

import type { StoryCard_story } from './__generated__/StoryCard_story.graphql';

type Props = {
  story: StoryCard_story
};

class StoryCard extends Component<Props> {
  _onCardPress() {
    if (!this.props.story.url) return;
    WebBrowser.openBrowserAsync(this.props.story.url);
  }

  _onCommentsPress() {
    return;
  }

  _onUserPress() {
    console.log(this.props);
    return;
  }

  renderScore() {
    if (!this.props.story.score) return;
    return `${this.props.story.score} ${
      this.props.story.score === 1 ? 'point' : 'points'
    }`;
  }

  renderDescendants() {
    if (!this.props.story.descendants) return '0';
    return String(this.props.story.descendants);
  }

  renderBy() {
    const color = usernameColor(this.props.story.by.created);
    return <Text style={{ color }}>{this.props.story.by.hnId}</Text>;
  }

  renderTime() {
    return fromNow(Number(this.props.story.time));
  }

  renderUrl() {
    return this.props.story.url ? ` (${toBaseURL(this.props.story.url)})` : '';
  }

  render() {
    return (
      <Card onPress={() => this._onCardPress()}>
        <CardContent>
          <Text style={material.subheading}>
            {this.props.story.title}
            <Text style={material.caption}>{this.renderUrl()}</Text>
          </Text>
          <Text style={material.body1}>
            {this.renderScore()} | {this.renderTime()}
          </Text>
        </CardContent>
        <CardActions style={{ flexDirection: 'row' }}>
          <Button
            compact
            icon="chat-bubble-outline"
            onPress={() => this._onCommentsPress()}>
            {this.renderDescendants()}
          </Button>
          <Button compact icon="person" onPress={() => this._onUserPress()}>
            {this.renderBy()}
          </Button>
        </CardActions>
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
      descendants
      by {
        hnId
        created
      }
    }
  `
);
