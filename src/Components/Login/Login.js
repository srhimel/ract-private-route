import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <Button className="w-100" onClick={googleSignIn}> Login with Google</Button>
        </div>
    );
};

export default Login;