import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button style={{ marginLeft : "420px" , background: " black"}} variant="danger"   onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;