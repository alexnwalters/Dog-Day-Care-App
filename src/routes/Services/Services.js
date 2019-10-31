import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Services extends Component {
    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return(
            <div className='services'>
                <h1 className='services_main_title'>Our SerVices
                    <br></br><span className='brushy_swash'>m</span>
                </h1>
                <section className='services_day'>
                    <div className='services_image'></div>
                    <div className='services_text'>
                        <h3 className='services_title'>Day Care</h3>
                        <div className='services_type'>
                            <div className='services_details'>
                                <p>Drop off your dog between 7:00am-9:00am and pick up by 6:00pm.</p>
                                <p>Your pup will have structured time inside as well as group play in the yard which will be monitored at all times.</p>
                            </div>
                            <ul className='services_pricing'>Pricing:
                                <li>$30 for One Dog</li>
                                <li>$50 for Two Dogs</li>
                                <button><Link to='/apply'>Start Application</Link></button>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                <section className='services_overnight'>
                    <div className='services_image'></div>
                    <div className='services_text'>
                        <h3 className='services_title'>Overnight Boarding</h3>
                        <div className='services_type'>
                            <div className='services_details'>
                                <p>Your pup will feel right at home during his or her overnight stay!</p>
                                <p>There is a great balance between play in the yard and relaxation time in the home.</p>
                                <p>You will send your dog along with his or her food and medications, and everything else is provided.</p>
                            </div>
                            <ul className='services_pricing'>
                                <li>Pricing:<br></br>
                                    <small>Price is for 24 hours.</small>
                                </li>
                                <li>$50 for One Dog</li>
                                <li>$85 for Two Dogs</li>
                                <button><Link to='/apply'>Start Application</Link></button>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                <section className='services_info'>
                    <div className='services_image'></div>
                    <div className='services_text'>
                        <h3 className='services_title'>Addtional Information</h3>
                        <div className='services_details'>
                            <p>In order to provide services, your dog must be spayed/neutered if over the age of one.</p>
                            <p>We require vaccinations against rabies, DHLPPC, and bordetella.</p>
                            <p>Crates are utilized during unsupervised times to ensure the safety of the dogs.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;