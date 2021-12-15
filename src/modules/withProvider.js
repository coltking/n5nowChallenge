import React from 'react'

import { Provider } from "react-redux";

import configureStore from '../store/configureAppStore';

const store = configureStore();

export const withProvider = (story) => (<Provider store={store}>
  {story}
</Provider>)

export default withProvider;