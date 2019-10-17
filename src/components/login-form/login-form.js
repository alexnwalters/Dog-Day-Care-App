import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './login-form.css';

class LoginFrom extends Component {
    render() {
        return(
            <form>
                <div className='login_form'>
                    <label>Username:</label>
                        <input type='text' name='user_name' required />
                    
                    <label>Password:</label>
                        <input type='password' name='password' required />
                </div>
                <button><Link to='/status'>Login</Link></button>
            </form>
        )
    }
}

export default LoginFrom;