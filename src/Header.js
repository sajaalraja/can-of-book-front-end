import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
class Header extends React.Component {
  render() {
    return(
      <Navbar className="navbar" collapseOnSelect expand="lg" >
        <Navbar.Brand className="title" >My Favorite Books</Navbar.Brand>
        <Link className="nav" to="/">Home</Link>
        <Link  className="nav"  to="/profile">Profile</Link>
        {this.props.isAuthenticated ? <LogoutButton /> : ''}
         </Navbar>
    );
  }
}

export default Header;
