import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/LoginPage.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    !isAuthenticated && (
      //   <button onClick={() => loginWithRedirect()}>Log In</button>
      <div class="container">
        <div class="login">
          <div class="container">
            <i class="fa fa-users extra-large-user-icon" aria-hidden="true"></i>
            <h1>James Bond Securities</h1>

            <button onClick={() => loginWithRedirect()}>Log In</button>
            <ul>
              <li>
                <i class="fa fa-facebook-f fa-2x"></i>
              </li>
              <li>
                <i class="fa fa-twitter fa-2x"></i>
              </li>
              <li>
                <i class="fa fa-github fa-2x"></i>
              </li>
              <li>
                <i class="fa fa-linkedin-in fa-2x"></i>
              </li>
            </ul>
            <span class="copyright">&copy;2023</span>
          </div>
        </div>
        <div class="register">
          <div class="container">
            <i
              class="fa fa-line-chart extra-large-chart-icon"
              aria-hidden="true"
            ></i>
            <h2>Hello , Investor!</h2>
            <p>
              SignIn to view your Dashboard, Charts, Metrics and many more.....
            </p>
            <button onClick={() => loginWithRedirect()}>
              Register <i class="fa fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginButton;
