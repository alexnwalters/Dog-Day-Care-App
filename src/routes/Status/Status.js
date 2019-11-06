import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Request from '../../components/Request/Request'
import TokenService from '../../services/TokenService'
import RequestsApiService from '../../services/RequestsApiService'
import './Status.css'

class Status extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    constructor(props){
        super(props)
        this.state = {
            applications: {}
        }
    }

    handleLogOut = () => {
        this.props.history.push('/')
        TokenService.clearAuthToken()
    }

    setApplications = (data) => {
        this.setState({
            applications: data
        })
    }

    //makes api get call of all care reqeusts
    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }

        RequestsApiService.getRequests()
            .then(res => this.setApplications(res))
            .catch()

    }

    renderRequests() {
        const { applications } = this.state
        const categories = ['Pending', 'Accepted', 'Declined']
        return ( 
            <div className='status'>
                <button onClick={this.handleLogOut}>Logout</button>
                {categories.map(category => {
                    return (
                        <div key={category}>
                            <h3>{category}</h3>
                            <ul className='status_labels'>
                                <li>Contact</li>
                                <li>Dog</li>
                                <li>Service</li>
                                <li>Date</li>
                            </ul>
                            <div>
                                {applications.map((request, i) => {
                                    if(request.service_info.status === category) {
                                        return (
                                            <div key={i}>
                                                <Request {...request} />
                                            </div>
                                        )
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        const { applications } = this.state
        return(
            <div>
                <h1>Request Administration</h1>
                <div>
                    {applications.length
                        ? this.renderRequests()
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Status);