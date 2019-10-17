import React, { Component } from 'react';
import Request from '../../components/request/request'
import './status.css'

class Status extends Component {
    static defaultProps = {
        applications: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderRequests() {
        const { applications } = this.props
        const categories = ['Pending', 'Accepted', 'Declined']
        return ( 
            <div className='status'>
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
        return(
            <div>
                <h1>Request Administration</h1>
                <div>
                    {this.renderRequests()}
                </div>
            </div>
        )
    }
}

export default Status;