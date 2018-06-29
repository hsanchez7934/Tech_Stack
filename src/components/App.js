import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Header } from './common/index.js';
import LibraryList from './LibraryList';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header headerText={'Redux App'} />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
