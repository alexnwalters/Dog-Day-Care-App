import React, { Component } from 'react';
import MapContainer from '../../components/map/map';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>
                <h1>About</h1>
                <div>
                    <h3>Our People</h3>
                    <p>Invidunt tempor sea dolores labore ut ipsum sit consetetur dolor. Et accusam dolores est rebum eos gubergren diam vero. Amet.</p>
                </div>
                <div>
                    <h3>Our Culture</h3>
                    <p>Sed sea aliquyam eos sit diam accusam. Dolor gubergren et sed est stet sadipscing, invidunt at sit et ea tempor,.</p>
                </div>
                <div>
                    <h3>Our Location</h3>
                    <div>
                        <h4> (...maybe change this section to 'Our Facilities')</h4>
                        <p>Ipsum dolores sit et invidunt diam dolor erat kasd dolore diam. Dolore lorem est et gubergren et et invidunt vero.</p>
                        <a href='https://goo.gl/maps/rift7FL47oxMax868' target='blank'>Get Directions</a>
                    </div>
                    <MapContainer />
                </div>
            </div>
        )
    }
}

export default About;