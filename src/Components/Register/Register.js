import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../Hooks/UseAuth';
import {useState} from 'react'
import { updateProfile, getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import useFirebase from '../Hooks/UseFirebase';

const Register = () => {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const {setEmail,error,password,email, setError, setPassword, signInUsingEmailAndPassword, singUpUsingEmailAndPassword, isLogin} = useFirebase()
    // useAuth call\
    const {signInUsingGoogle} = useAuth();
    // sign Up button\
    // const handleSignUp = e => {
    //     e.preventDefault();
    //     if(password.length < 6){
    //         setError('Password Must be 6 letter')
    //         return;
    //     }
    //     if(isLogin){
    //         singUpUsingEmailAndPassword();
    //     }
    //     else{
    //         signInUsingEmailAndPassword();
    //     }
    // }
    //name btn
    const handleNameChange = e => {
        setName(e.target.value)
    }
    // email btn\
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // password btn\
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const auth = getAuth()
    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess(true)
                updateName();
            })
            .catch(error => {
                setSuccess(false)
                setError(error.message);
            })
    }

    const updateName = () => {
        updateProfile(auth.currentUser , {
            displayName : name
        })
            .then(res => {

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='my-5 text-center mx-auto signIn-container'>
            <h1 className="signIn-text pb-5">Create Account</h1>
            {
                success && <div className="alert alert-success" role="alert">
                User sign up successfully! Now user can sign in.
                </div>
            }
            <form  onSubmit={createUser}>
                <input onBlur={handleNameChange} className='form-control input-item' type="name" name="" placeholder='Enter Your Name' id="" required />
                <br />
                <input className='form-control input-item' onBlur={handleEmailChange} type="email" name="" placeholder='Enter Your Email' id="" required />
                <br />
                <input onBlur={handlePasswordChange} className='form-control input-item' type="password" name="" placeholder='Enter Your Password' id="" required/><sapn className='text-danger'>{error}</sapn>
                <br />
                <input className='form-control input-item' type="password" name="" placeholder='Re-Enter Your Password' id="" />
                <br />
                <input className='form-control btn-submit' type="submit" value="Sign Up" />
            </form>
            <div className='pt-5'>
                <h5>Alreay Have an Account? <Link to='/signIn'>Sign In</Link> </h5>
            </div>
            <div><h3 className='text-warning py-3'>-------------- or ---------------</h3></div>
            {/* google sign btn\ */}
            <button onClick={signInUsingGoogle} className='btn-submit form-control mt-3'><i class="fab fa-google-plus-g"></i> <span>Google Sign In</span></button>
            </div>
            <Footer></Footer>
        </div>
        
    );
    
};

export default Register;