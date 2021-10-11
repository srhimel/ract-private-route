import firebaseInit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInit();

const useFirebase = () => {

    //state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // auth 
    const auth = getAuth();

    //provider
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            });
    }

    // set sign in use state for extra
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])

    // sign out 

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }



    // return

    return {
        user,
        error,
        googleSignIn,
        logOut
    }
}

export default useFirebase;