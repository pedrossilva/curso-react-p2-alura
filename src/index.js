import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './css/reset.css'
import './css/timeline.css'
import './css/login.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './components/Login'

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/timeline" exact={true} component={App} />
        {/*<Route path="/sobre" component={Sobre} />*/}
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
