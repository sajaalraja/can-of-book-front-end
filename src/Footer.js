import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';
class Footer extends React.Component {
  render() {
    return(
      <Navbar className="footer" collapseOnSelect expand="lg">
        <Navbar.Brand>&copy; Best Books</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
