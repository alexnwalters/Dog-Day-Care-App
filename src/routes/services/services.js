import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './services.css'

class Services extends Component {
    render() {
        return(
            <div className='services'>
                <h1>Services</h1>
                <section className='services_type'>
                    <div>
                        <h3>Day Care</h3>
                        <p>Invidunt tempor sea dolores labore ut ipsum sit consetetur dolor. Et accusam dolores est rebum eos gubergren diam vero. Amet.</p>
                        <p>Eirmod sanctus invidunt invidunt diam nonumy eirmod sanctus sanctus tempor, sea accusam sed diam justo. Ipsum tempor kasd ipsum amet,.</p>
                        <ul>Pricing
                            <li>$30 for One Dog</li>
                            <li>$50 for Two Dogs</li>
                        </ul>
                    </div>
                    <div className='services_image'>Image</div>
                </section>
                <section className='services_type'>
                    <div className='services_image'>Image</div>
                    <div>
                        <h3>Overnight Care</h3>
                        <p>Sed sea aliquyam eos sit diam accusam. Dolor gubergren et sed est stet sadipscing, invidunt at sit et ea tempor,.</p>
                        <p>Sit ipsum tempor eirmod dolores sed erat amet sit eos stet. Magna amet accusam elitr amet. Dolor clita kasd clita.</p>
                        <ul>Pricing
                            <li>$50 for One Dog</li>
                            <li>$85 for Two Dogs</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3>Apply</h3>
                    <button><Link to='/apply'>Start Application</Link></button>
                </section>
            </div>
        )
    }
}

export default Services;