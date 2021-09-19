import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Templates/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ViewImage } from './Templates/ViewImage';
import {PageNotFound} from './Templates/PageNotFound'
import {Menu } from './Templates/Menu'
import './styles/global.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/ViewImage/:idimg' component={ViewImage} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
