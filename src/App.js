import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Welcome from './routes/Welcome/Welcome'
import About from './routes/About/About';
import Services from './routes/Services/Services';
import Apply from './routes/Apply/Apply';
import Login from './routes/Login/Login';
import Status from './routes/Status/Status';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import NotFound from './routes/NotFound/NotFound';
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerFocus: ''
        }
    }
    
    handleApplication = (application) => {
        this.setState({
            applications: [...this.state.applications, application]
        })
    }

    render() {
        return (
            <main className='App'>
                <header className='header'>
                    <Header />
                </header>
                <section className='main_section'>
                    <Switch>
                        <PublicRoute path='/' component={Welcome} exact />
                        <Route path='/about' component={About} />
                        <Route path='/services' component={Services} />
                        <Route path='/apply' component={Apply} />
                        <PublicRoute path='/login' component={Login} />
                        <PrivateRoute path='/status' component={Status}/>
                        <Route component={NotFound} />
                    </Switch>
                </section>
                <footer className='footer'>
                    <Footer />
                </footer>
            </main>
        )
    }
}

export default withRouter(App);
