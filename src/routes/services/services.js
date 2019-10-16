import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return(
            <div>
                <h1>Services</h1>
                <section>
                    <h3>Day Care</h3>
                    <p>Invidunt tempor sea dolores labore ut ipsum sit consetetur dolor. Et accusam dolores est rebum eos gubergren diam vero. Amet.</p>
                    <ul>Pricing
                        <li>$30 for One Dog</li>
                        <li>$50 for Two Dogs</li>
                    </ul>
                </section>
                <section>
                    <h3>Overnight Care</h3>
                    <p>Sed sea aliquyam eos sit diam accusam. Dolor gubergren et sed est stet sadipscing, invidunt at sit et ea tempor,.</p>
                    <ul>Pricing
                        <li>$50 for One Dog</li>
                        <li>$85 for Two Dogs</li>
                    </ul>
                </section>
                <section>
                    <h3>Apply</h3>
                    <button><Link to='/application'>Start Application</Link></button>
                </section>
            </div>
        )
    }
}

export default Services;