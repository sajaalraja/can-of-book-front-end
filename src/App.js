import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Content from './Content';

class App extends Component {
  render() {
    console.log(this.props.auth0)
    return (
      <div style={{textAlign:"center" , margin:"auto" , background:"#EEDC82" , marginTop:"50px",
       width:"50%" , height:"400px" , borderRadius:"5px"}} >
        <Router>
       
        <nav>
          <ul style={{listStyleType:'none'}}>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            { this.props.auth0.isAuthenticated?
            <><li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/">profile</Link>
          </li>
         
            </>:
             <li>
             <Link to="/login">Login</Link>
           </li>
           
          
          }
           
            
          </ul>
        </nav>
            
        <Switch>
        <Route exact path="/">
            <Profile />
            <Content />
          </Route>
          <Route path="/login">
            <LoginButton />
          </Route>
          <Route path="/logout">
            <LogoutButton />
          </Route>
          
        </Switch>
        
        </Router>
        
      </div>
    )
  }
}

export default withAuth0 (App)


