//@flow

import React, { Component } from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { Haptic } from 'expo';

import StoriesFeedQueryRenderer from './StoriesFeedQueryRenderer';

type Route = {
  key: string,
  title: string,
  icon: string
};

type Props = {};

type State = {
  index: number,
  routes: Route[]
};

export default class StoriesFeedNavigator extends Component<Props, State> {
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

  _handleIndexChange = (index: number) => {
    Haptic.selection();
    this.setState({ index });
  };

  _renderScene = BottomNavigation.SceneMap({
    TOP: StoriesFeedQueryRenderer,
    JOB: StoriesFeedQueryRenderer,
    NEW: StoriesFeedQueryRenderer,
    BEST: StoriesFeedQueryRenderer,
    ASK: StoriesFeedQueryRenderer,
    SHOW: StoriesFeedQueryRenderer
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
