import { Switch, Route } from 'react-router-dom'
import React from 'react';

import Home from './pagedraw/home';
import About from './pagedraw/about';
import Contact from './pagedraw/contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;