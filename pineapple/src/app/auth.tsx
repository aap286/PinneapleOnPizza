import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/clientApp";

// Configure FirebaeUI

const uiConfig = {
  // Redirect to  after sign in
  signInSuccessUrl: "/",
  // display GitHub as auth providers
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
    return (
      <div>authentication page</div>
    // <div
    //   style={{
    //     maxWidth: "320px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <h1>Pineapple Login</h1>
    //   <p>Please sign-in:</p>
    //   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    // </div>
  );
}
