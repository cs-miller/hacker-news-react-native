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
import { withNavigation } from 'react-navigation';
import { WebBrowser } from 'expo';

import { toBaseURL, fromNow, usernameColor } from '../utils';

import type { StoryCard_story } from './__generated__/StoryCard_story.graphql';

type Props = {
  story: StoryCard_story,
  navigation: any
};

class StoryCard extends Component<Props> {
  _onCardPress(navigation) {
    if (!this.props.story.url) return;
    WebBrowser.openBrowserAsync(this.props.story.url);
  }

  _onCommentsPress() {
    this.props.navigation.navigate('CommentsFeed', {
      storyId: this.props.story.id
    });
  }

  _onUserPress() {
    this.props.navigation.navigate('UserProfile', {
      userId: this.props.story.by.id
    });
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
  withNavigation(StoryCard),
  graphql`
    fragment StoryCard_story on Story {
      id
      title
      url
      time
      score
      descendants
      by {
        id
        hnId
        created
      }
    }
  `
);
