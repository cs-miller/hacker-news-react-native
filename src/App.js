//@flow

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import StoriesFeedNavigator from './StoriesFeed/StoriesFeedNavigator';
// import CommentsFeedNavigator from './CommentsFeed/CommentsFeedNavigator';

export default createStackNavigator(
  {
    StoriesFeed: {
      screen: StoriesFeedNavigator
    }
  },
  {
    headerMode: 'none'
  }
);
