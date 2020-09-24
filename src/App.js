import React from 'react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from './Home'

import './App.css';

function App() {
  return (
    <div className="app">
      <AmplifySignOut />
      <Home />
    </div>
  );
}

export default withAuthenticator(App, true);