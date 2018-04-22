//@flow

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import StoriesFeedNavigator from './StoriesFeed/StoriesFeedNavigator';
// import CommentsFeedNavigator from './CommentsFeed/CommentsFeedNavigator';

export default StackNavigator(
  {
    StoriesFeed: {
      screen: StoriesFeedNavigator
    }
  },
  {
    headerMode: 'none'
  }
);
