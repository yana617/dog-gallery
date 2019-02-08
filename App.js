import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import Main from './screens/Main';
import DogGallery from './screens/DogGallery';

const AppNavigator = createSwitchNavigator(
  {
    Main,
    DogGallery,
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (<AppContainer />);

export default App;
