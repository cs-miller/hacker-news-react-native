import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

import App from './src/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ef6f2e',
    secondary: '#f6f6f0'
  }
};

export default () => (
  <PaperProvider theme={theme}>
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <App />
    </SafeAreaView>
  </PaperProvider>
);
