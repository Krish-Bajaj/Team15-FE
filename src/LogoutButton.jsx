import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return ( isAuthenticated && (
    <>
    <button type="button" class="btn btn-danger" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
    <br/>
    </>
    )
  );
};

export default LogoutButton;