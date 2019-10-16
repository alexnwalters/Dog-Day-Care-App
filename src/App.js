import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Welcome from './routes/welcome/welcome'
import About from './routes/about/about';
import Services from './routes/services/services';
import Apply from './routes/apply/apply';
import Login from './routes/login/login';
import Status from './routes/status/status';
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
                        <Route path='/' component={Welcome} exact />
                        <Route path='/about' component={About} />
                        <Route path='/services' component={Services} />
                        <Route 
                            path='/apply'
                            render={(props) => <Apply {...props} addApplication={this.handleApplication} />}
                        />
                        <Route path='/login' component={Login} />
                        <Route
                            path='/status'
                            render={(props) => <Status {...props} applications={this.state.applications} />}
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
