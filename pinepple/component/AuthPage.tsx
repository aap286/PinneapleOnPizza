// TODO: authentication page

"use client";
import React, { useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  doc,
  setDoc,
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

import VoterList from "./VoterList";

// provider
const googleAuth = new GoogleAuthProvider();
const githubAuth = new GithubAuthProvider();
const facebookAuth = new FacebookAuthProvider();

function AuthPage() {
//   const [user, setUser] = useAuthState(auth);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => { 
    }, [user])


  const login = async (provider: any) => {
      try {
        
          await signInWithPopup(auth, provider);
        
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <h1>Login with next.js google auth</h1>

      {user ? (
        <>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleSignOut}
          >
            Sign out
          </button>
          {/* <VoterList currentUser={user} /> */}
          {user.email}
        </>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-block btn-social btn-google"
            onClick={() => login(googleAuth)}
          >
            Login with Google
          </button>
          <button
            type="button"
            className="btn btn-block btn-social btn-github"
            onClick={() => login(githubAuth)}
          >
            Login with GitHub
          </button>
          <button
            type="button"
            className="btn btn-block btn-social btn-facebook"
            onClick={() => login(facebookAuth)}
          >
            Login with Facebook
          </button>
        </>
      )}
    </>
  );
}

export default AuthPage;
