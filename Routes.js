import { exportDefaultDeclaration } from '@babel/types';
import { func } from 'prop-types';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/repositories' component={Repositories} />
        </Switch>    
      </BrowserRouter>
    )
}