import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
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
import './App.css';
import STORE from './STORE'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            applications: STORE.applications,
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
                        <PublicRoute path='/about' component={About} />
                        <PublicRoute path='/services' component={Services} />
                        <PublicRoute 
                            path='/apply'
                            component={Apply}
                            //render={(props) => <Apply {...props} addApplication={this.handleApplication} />}
                        />
                        <PublicRoute path='/login' component={Login} />
                        <PrivateRoute
                            path='/status'
                            component={Status}
                            // render={(props) => <Status {...props} applications={this.state.applications} />}
                        />
                    </Switch>
                </section>
                <footer className='footer'>
                    <Footer />
                </footer>
            </main>
        )
    }
}

export default App;
