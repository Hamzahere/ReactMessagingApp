import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import MessageDetails from './components/messages/MessageDetails'
import CreateMessage from './components/messages/CreateMessage'

import SignIn from './components/authentication/signin'
import SignUp from './components/authentication/signup'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/'component={Dashboard} />
            <Route path='/message/:id' component={MessageDetails} />
            <Route path='/create' component={CreateMessage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
