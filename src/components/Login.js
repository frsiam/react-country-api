import axios from 'axios';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import login from '../Images/login.png';
import loginbg from '../Images/loginbg.png';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if (loading || sending) {
        return <Loading />
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('https://infinite-brook-76806.herokuapp.com/login', { email })
        // localStorage.setItem('accessToken', data);
        // navigate(from, { replace: true });
        navigate('/success');
        toast.success('Successfully Login')
    }
    if (user) {
        // navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast('Please give a valid email.');
        }
        await sendPasswordResetEmail(email);
        toast('Email sent !! Check Your email')
    }
    return (
        <div className='min-h-screen' style={{ backgroundImage: `url(${loginbg})` }}>
            <div className='container  mx-auto w-3/4 md:w-1/2 lg:w-2/6 py-5 px-4 md:p-5 bg-emerald-200'>
                <div className='text-center mx-auto'>
                    <img className='img-fluid rounded-circle mx-auto w-3/5 md:w-2/6' src={login} alt="" />
                    <h1 className='text-2xl font-semibold'>Login form</h1>
                </div>
                <form className='mt-5 mb-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <h1 className='my-3'>{errorElement}</h1>
                    <button className="btn bg-rose-600 font-semibold text-xl text-white rounded-0 w-full">Login</button>
                </form>
                <div className='d-flex justify-between'>
                    <p className='me-2'>Not a Member ? <span onClick={() => navigate('/register')} className='text-primary cursor-pointer font-semibold'>Register</span></p>
                    <p className='ms-2'>Forget Password ? <span onClick={() => resetPassword()} className='text-primary cursor-pointer font-semibold'>Reset</span></p>
                </div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;