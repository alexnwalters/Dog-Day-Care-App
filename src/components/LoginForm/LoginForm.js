import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import AuthApiService from '../../services/AuthApiService';
import './LoginForm.css';

class LoginFrom extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    constructor(props){
        super(props)
        this.state = {
            error: null,
        }
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        
        this.setState({ 
            error: null,
        })

        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/status')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    
    render() {
        const { error } = this.state
        
        return(
            <div>
                <form onSubmit={this.handleSubmitJwtAuth}>
                    <div role='alert'>
                        {error && <p className='red'>{ error }</p>}
                    </div>
                    <div className='login_form'>
                        <label>Username:</label>
                            <input type='text' name='user_name' required />
                        
                        <label>Password:</label>
                            <input type='password' name='password' required />
                    </div>
                    <button type='sumbit'>Login</button>
                </form>
                <div>
                    <h3>Sample Login</h3>
                    <p>Username: TestUser</p>
                    <p>Password: Test123</p>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginFrom);