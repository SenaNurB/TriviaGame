import React from 'react';
import axios from 'axios';

import AppNavigator from './src/navigation/AppNavigator';
import Providers from './src/providers';

import env from './env.config';

function setAxiosConfig() {
  axios.defaults.baseURL = env.BACKEND_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
}

setAxiosConfig();

const App = () => {
  return (
    <Providers>
      <AppNavigator />
    </Providers>
  );
};

export default App;
