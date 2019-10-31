import React, { Component } from 'react';
import LoginFrom from '../../components/LoginForm/LoginForm';

class Login extends Component {
    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }
    
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