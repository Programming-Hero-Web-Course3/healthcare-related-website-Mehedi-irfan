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

    // google sign in\
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
       
    //    error set\
        .catch(error => {
            setError(error.message)
        })
    }
    // register 
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
    // signIn\
    // const singUpUsingEmailAndPassword = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then(result=> {
    //         const user = result.user;
    //         setUser(user);
    //         setError('')
    //     })
    //     .catch(error => {
    //         setError(error.message)
    //     })
    // }
    // log out\
    const logOut = () => {
        signOut(auth)
        .then(() => {
           
        })
    }
    // data state chage\
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
        isLogin,
        setIsLogin,
        email,
        password
    }
}


export default useFirebase;