import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Details.css'
import RequestsApiService from '../../services/RequestsApiService';
import { withRouter } from 'react-router-dom'

class Details extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
        onClose: () => {},
        show: false
    }
    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e)
    }

    //patch for change to accepted status
    handleAccept = () => {
        const accepted = { status: 'Accepted' }
        const request_id = this.props.id
        RequestsApiService.changeRequestStatus(accepted, request_id)
            .then(() => {
                this.props.history.push('/')
            })
    }

    //patch for change to declined status
    handleDecline = () => {
        const declined = { status: 'Declined' }
        const request_id = this.props.id
        RequestsApiService.changeRequestStatus(declined, request_id)
            .then(() => {
                this.props.history.push('/')
            })
    }

    //patch for change to pending status
    handlePending = () => {
        const pending = { status: 'Pending' }
        const request_id = this.props.id
        RequestsApiService.changeRequestStatus(pending, request_id)
            .then(() => {
                this.props.history.push('/')
            })
    }

    //deletes request
    handleDelete = () => {
        const request_id = this.props.id
        RequestsApiService.deleteRequest(request_id)
            .then(() => {
                this.props.history.push('/')
            })
    }

    renderButtons(){
        const { status } = this.props.service_info
        if (status === 'Pending'){
            return (
                <div>
                    <button onClick={this.handleAccept}>Accept</button>
                    <button onClick={this.handleDecline}>Decline</button>
                </div>
            )
        }
        else if (status === 'Accepted'){
            return (
                <div>
                    <button onClick={this.handlePending}>Pending</button>
                    <button onClick={this.handleDecline}>Decline</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handlePending}>Pending</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }
    }

    render() {
        const { show, service_info, contact_info, dog_info, behavioral_info } = this.props

        if(!show) {
            return null;
        }
        return (
            <div className='popup_container'>
                <div className='popup_inner_container'>
                    <div className='popup_nav'>
                        <FontAwesomeIcon icon='times' className='popup_close' onClick={e => {this.onClose(e)}}> Close </FontAwesomeIcon>
                        <div className='popup_details_buttons'>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className='popup_details'>
                        <h2>Request Details</h2>
                        <ul>
                            <li>{service_info.service}</li>
                            <li>{service_info.care_date}</li>
                            <li>{service_info.status}</li>
                        </ul>
                        <div>
                            <h3>Contact Information</h3>
                            <p>Name: {contact_info.contact_name}</p>
                            <p>Email: <a href={`mailto:${contact_info.email}?Subject=Thank%20you%20for%20your%20care%20request!`} target='blank'>{contact_info.email}</a></p>
                            <p>Phone: {contact_info.phone}</p>
                        </div>
                        <div>
                            <h3>Dog Details</h3>
                            <p>Name: {dog_info.dog_name}</p>
                            <p>Breed: {dog_info.breed}</p>
                            <p>Age: {dog_info.age_yrs} yrs. {dog_info.age_mos} mos.</p>
                            <p>Sex: {dog_info.sex}</p>
                            <p>Spayed/Neutered: {dog_info.spayed}</p>
                            <p>Last Exam: {dog_info.exam}</p>
                            <p>Vaccines: {dog_info.vaccines}</p>
                            <p>Medical Notes: {dog_info.medical}</p>
                        </div>
                        <div>
                            <h3>Behavioral Review</h3>
                            <p>Prior Daycare: {behavioral_info.prior_care}</p>
                            <p>Crate Trained: {behavioral_info.crate}</p>
                            <p>Escape Crate/Fence: {behavioral_info.escape}</p>
                            <p>Other Pets: {behavioral_info.other_pets}</p>
                            <p>Growl when items taken: {behavioral_info.growl}</p>
                            <p>Growl when approached: {behavioral_info.growl_other}</p>
                            <p>Bite Before: {behavioral_info.bite}</p>
                            <p>Bite Details: {behavioral_info.bite_details}</p>
                            <p>Behavior w/ Children: {behavioral_info.children}</p>
                            <p>Behavior w/ Visitors: {behavioral_info.visitors}</p>
                            <p>Behavior Owner Absence: {behavioral_info.absent}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Details.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
} 

export default withRouter(Details)