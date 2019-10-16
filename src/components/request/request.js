import React, { Component } from 'react'
import Details from '../details/details'
import './request.css'

class Request extends Component {
    static defaultProps = {
        contact_info: {},
        dog_info: {},
        service_info: {},
    }

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    
    showDetails = (e) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const {contact_info, dog_info, service_info} = this.props
        return(
            <div>
                <div className='request_button' onClick={e => {this.showDetails()}}>
                    <ul className='request_labels'>
                        <li>{contact_info.contact_name}</li>
                        <li>{dog_info.dog_name}</li>
                        <li>{service_info.service}</li>
                        <li>{service_info.care_date}</li>
                    </ul>
                </div>
                <Details show={this.state.show} onClose={this.showDetails} {...this.props}/>
            </div>
        )
    }
}

export default Request