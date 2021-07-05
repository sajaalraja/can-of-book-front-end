import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import { Image } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return(
      <Card className="card" >
        <Card.Body>
          <Card.Title className="title">Log In</Card.Title>
          <Card.Text className="text">
         
            Click Below to Log In
          </Card.Text>
          <Card.Img className="img" as={Image} src={`https://b.kisscc0.com/20190403/vgq/kisscc0-computer-icons-arrow-button-mono-kmmsgforwarded-5ca5135c8756b5.8995771115543222685544.png`} fluid={true} alt="Card image"/>
         <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import './Login.css';

// class Login extends React.Component {
//   render() {
//     return(
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>Log In</Card.Title>
//           <Card.Text>
//             Click Below to Log In
//           </Card.Text>
//           {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
//         </Card.Body>
//       </Card>
//     )
//   }
// }

// export default Login;
