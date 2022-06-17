import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './components/Loading';
import auth from './firebase.init';

const LoginSuccess = () => {
    const [user] = useAuthState(auth)
    if (!user) {
        return <Loading />
    }
    return (
        <div>
            <div className="container text-center mt-8">
                <h1 className="text-4xl text-violet-700 font-bold">Welcome to <span className="text-pink-600">{user?.displayName}</span></h1>
                <section className="mt-4">
                    <h2 className="text-xl">Your email address is: <span className="text-3xl font-semibold underline text-blue-600">{user?.email}</span></h2>
                </section>
            </div>
        </div>
    );
};

export default LoginSuccess;