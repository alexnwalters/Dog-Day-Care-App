import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Dog Day Care</h1>
                </div>
            
                <div>
                    <h2>Welcome to Dog Day Care</h2>
                    <p>Invidunt tempor sea dolores labore ut ipsum sit consetetur dolor. Et accusam dolores est rebum eos gubergren diam vero. Amet.</p>
                    <button><Link to='/about'>About Us</Link></button>
                </div>

                <div>
                    <h2>Our Sevices</h2>
                    <ul className="services">
                        <li>
                            <h3>Day Care</h3>
                            <Link to='/services'>more info...</Link>
                        </li>
                        <li>
                            <h3>Overnight Care</h3>
                            <Link to='/services'>more info...</Link>
                        </li>
                    </ul>
                </div>
        
                <div>
                    <h2>Our Clients</h2>
                    <div>
                        <div>
                            <h3>Review 1</h3>
                            <p>Justo diam accusam sit lorem et ea et sed sit.</p>
                        </div>
                        <div>
                            <h3>Review 2</h3>
                            <p>Eirmod aliquyam sanctus sed est lorem consetetur dolore amet aliquyam.</p>
                        </div>
                        <div>
                            <h3>Review 3</h3>
                            <p>Aliquyam gubergren amet eos nonumy consetetur, accusam consetetur voluptua et.</p>
                        </div>
                    </div>
                </div>
        
                <div>
                    <h2>Apply Today!</h2>
                    <p>Et et vero takimata amet elitr eos tempor amet. Consetetur.</p>
                    <button><Link to='/apply'>Start Application</Link></button>
                </div>
            </div> 
        )
    }
}

export default Welcome;