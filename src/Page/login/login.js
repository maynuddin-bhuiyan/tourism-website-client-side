import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import './Login.css';




const Login = () => {

    const { signInGoogle } = useAuth();

    return (
        <div className='Login'>
            <Button onClick={signInGoogle}>Log In With Google</Button>
        </div>
    );
};

export default Login;