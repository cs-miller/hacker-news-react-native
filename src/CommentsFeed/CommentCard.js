// @flow

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import { Card, CardContent, Title, Paragraph } from 'react-native-paper';
import HTML from 'react-native-render-html';
import { WebBrowser } from 'expo';

import type { CommentCard_comment } from './__generated__/CommentCard_comment.graphql';

type Props = {
  comment: CommentCard_comment
};

class CommentCard extends Component<Props> {
  render() {
    if (!this.props.comment.text) return null;
    return (
      <Card>
        <CardContent>
          <Title onPress={() => console.log(this.props)}>
            {this.props.comment.by.hnId}
          </Title>
          <HTML
            html={this.props.comment.text}
            onLinkPress={(event, href, tag) => {
              WebBrowser.openBrowserAsync(href);
            }}
            containerStyle={{
              flexWrap: 'wrap',
              display: 'flex'
            }}
          />
        </CardContent>
      </Card>
    );
  }
}

export default createFragmentContainer(
  CommentCard,
  graphql`
    fragment CommentCard_comment on Comment {
      id
      text
      time
      by {
        id
        hnId
        created
      }
    }
  `
);
