import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/Project/:id' component={ProjectDetails}></Route>
          <Route path='/SignIn' component={SignIn}></Route>
          <Route path='/SignUp' component={SignUp}></Route>
          <Route path='/create' component={CreateProject}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
