import {useEffect, useState} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth';
import initializeAuthentication from '../Firebase/Firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {

        })
    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    }, [])
    return {
        signInUsingGoogle,
        user,
        logOut,
        error
    }
}


export default useFirebase;