import {useEffect, useState} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import initializeAuthentication from '../Firebase/Firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);
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
    const signInUsingEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            setUser(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const singUpUsingEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result=> {
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
        error,
        signInUsingEmailAndPassword,
        setEmail,
        setPassword,
        password,
        setError,
        singUpUsingEmailAndPassword,
        isLogin,
        setIsLogin
    }
}


export default useFirebase;