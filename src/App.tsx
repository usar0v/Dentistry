import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainTab from './stacks/MainTab';
import {setupStore} from './store/store';

const store = setupStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A86FF',
    accent: '#f1c40f',
  },
};
const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <MainTab />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
