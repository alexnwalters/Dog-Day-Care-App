import React, { Component } from 'react';
import MapContainer from '../../components/Map/Map';

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
                    <h3>Our Facilities</h3>
                    <div>
                        <p>Ipsum dolores sit et invidunt diam dolor erat kasd dolore diam. Dolore lorem est et gubergren et et invidunt vero.</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;