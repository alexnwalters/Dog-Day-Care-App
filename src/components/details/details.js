import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './details.css'

class Details extends Component {
    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e)
    }

    render() {
        const { show, service_info, contact_info, dog_info, behavioral_info } = this.props
        if(!show) {
            return null;
        }
        return (
            <div className='popup_container'>
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
                        <p>Email: {contact_info.email}</p>
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
                    <div>
                    <div>
                        <button>Accept</button>
                        <button>Decline</button>
                    </div>
                    </div>
                </div>
                <button onClick={e => {this.onClose(e)}}> Close </button>
            </div>
        )
    }
}

Details.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
} 

export default Details