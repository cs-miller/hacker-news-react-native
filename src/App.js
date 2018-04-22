//@flow

import React, { Component } from 'react';
import { Text } from 'react-native';
import { material } from 'react-native-typography';
import { BottomNavigation } from 'react-native-paper';

import Feed from './Feed';

type Route = {
  key: string,
  icon: any
};

type Props = {};

type State = {
  index: number,
  routes: Route[]
};

export default class App extends Component<Props, State> {
  state = {
    index: 0,
    routes: [
      {
        key: 'TOP',
        title: 'Top',
        icon: 'home'
      },
      {
        key: 'NEW',
        title: 'New',
        icon: 'new-releases'
      },
      {
        key: 'BEST',
        title: 'Best',
        icon: 'thumb-up'
      },
      {
        key: 'JOB',
        title: 'Jobs',
        icon: 'work'
      },
      {
        key: 'ASK',
        title: 'Ask',
        icon: 'question-answer'
      },
      {
        key: 'SHOW',
        title: 'Show',
        icon: 'code'
      }
    ]
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    TOP: Feed,
    JOB: Feed,
    NEW: Feed,
    BEST: Feed,
    ASK: Feed,
    SHOW: Feed
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
