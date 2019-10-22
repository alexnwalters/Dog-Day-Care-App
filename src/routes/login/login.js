import React, { Component } from 'react';
import LoginFrom from '../../components/LoginForm/LoginForm';

class Login extends Component {
    
    render() {
        return(
            <div>
                <h1>Administration Login</h1>
                <LoginFrom />
            </div>
        )
    }
}

export default Login;