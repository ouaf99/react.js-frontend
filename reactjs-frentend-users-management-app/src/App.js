import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent.jsx';
//import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewUserComponent from './components/ViewUserComponent';
//import UserDashboard from './components/UserDashboard';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
          <div className="container">
            <Switch>  
              <Route path = "/" exact component = {ListUserComponent}></Route>
              <Route path = "/users" component = {ListUserComponent}></Route>
              <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
              {/* </*Route path = "/update-user/:id" component = {UpdateUserComponent}></Route> */}
              <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
              {/*<Route path = "/dashboard" exact component = {UserDashboard}></Route>*/}
              <Route path = "/dashboard-template"  component = {Dashboard}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
export default App;
