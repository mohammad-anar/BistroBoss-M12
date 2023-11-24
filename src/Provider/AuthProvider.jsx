import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.conf";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// auth provider func 
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName:name, photoURL:photo
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if(currentUser){
          // make api request for token. get token and save to local storage
          axiosPublic.post("/jwt", {email:currentUser?.email})
          .then(res=> {
            const token = res.data;
            localStorage.setItem("access_token", token)
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
          })

        }else{
          // remove token
          localStorage.removeItem("access_token")
          setLoading(false);
        }
        
    })
    return()=> {
        unSubscribe()
    }
  },[axiosPublic])

  const authValue = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    gitHubSignIn,
    updateUser,
    logOut
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
