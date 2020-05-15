import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./public/publicRoute";
import { PrivateRoute } from "./private/privateRoute";
import { Login } from './public/components/Login';
import { Home } from './private/components/Home';
import { Orders } from './private/components/orders/Orders';
import { Settings } from './private/components/settings/Settings';
import { PollsResults } from './private/components/polls/PollsResults';
import { Order } from './private/components/orders/Order';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Login} exact path="/login" />
          <PrivateRoute component={Home} exact path="/home" />
          <PrivateRoute component={Orders} exact path="/orders" />
          <PrivateRoute component={Settings} exact path="/settings" />
          <PrivateRoute component={PollsResults} exact path="/results" />
          <PrivateRoute component={Order} exact path="/orderid" />
          <Redirect from="/" to="login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
