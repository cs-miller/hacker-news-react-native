//@flow

import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Feed from './Feed';

type Route = {
  key: string,
  title: string
};

type Props = {};

type State = {
  index: number,
  routes: Route[]
};

export default class App extends Component<Props, State> {
  state = {
    index: 0,
    routes: [{ key: 'TOP', title: 'Top' }, { key: 'JOB', title: 'Jobs' }]
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    TOP: Feed,
    JOB: Feed
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
