import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button style={{ marginLeft : "12px" , background: " black"}} onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;