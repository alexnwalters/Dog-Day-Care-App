import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LoginFrom extends Component {
    render() {
        return(
            <form>
                <fieldset>
                    <label>Username:</label>
                        <input type='text' name='user_name' required />
                    
                    <label>Password:</label>
                        <input type='password' name='password' required />
                </fieldset>
                <button><Link to='/status'>Login</Link></button>
            </form>
        )
    }
}

export default LoginFrom;