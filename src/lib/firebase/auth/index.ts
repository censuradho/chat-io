import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "..";

export function signInWithGoogle () {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

export function signOut (){
  auth.signOut();
}