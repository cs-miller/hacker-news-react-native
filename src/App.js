//@flow

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import StoriesFeedNavigator from './StoriesFeed/StoriesFeedNavigator';
import CommentsFeedQueryRenderer from './CommentsFeed/CommentsFeedQueryRenderer';

export default createStackNavigator(
  {
    StoriesFeed: {
      screen: StoriesFeedNavigator
    },
    CommentsFeed: {
      screen: CommentsFeedQueryRenderer
    }
  },
  {
    headerMode: 'none'
  }
);
