import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className='welcome'>
                <div>
                    <h1>Welcome to Dog Day Care</h1>
                </div>
            
                <div className='welcome_hero'>
                    <h2 className='welcome_hero_image'>[Add Hero Image]</h2>
                    <div>
                        <h3>Invidunt tempor sea dolores labore ut ipsum sit consetetur dolor. Et accusam dolores est rebum eos gubergren diam vero. Amet.</h3>
                        <button><Link to='/about'> more about us</Link></button>
                    </div>
                </div>

                <div>
                    <h2>Our Sevices</h2>
                    <ul className="welcome_services">
                        <li>
                            <h3>Day Care</h3>
                            <p>Voluptua amet sanctus duo accusam voluptua ea voluptua. Ipsum est lorem dolor rebum. Est invidunt.</p>
                            <button><Link to='/services'>more info...</Link></button>
                        </li>
                        <li>
                            <h3>Overnight Care</h3>
                            <p>Accusam nonumy justo justo clita est eirmod sanctus vero kasd sed. Justo et sed kasd.</p>
                            <button><Link to='/services'>more info...</Link></button>
                        </li>
                    </ul>
                </div>
        
                <div>
                    <h2>Our Clients</h2>
                    <div className="welcome_reviews">
                        <div>
                            {/* <h3>Review 1</h3>
                            <p>Justo diam accusam sit lorem et ea et sed sit.</p> */}
                            <div className="fb-post" data-href='https://www.facebook.com/linzy.french/posts/10157032548594902'  data-show-text='true'></div>
                        </div>
                        <div className='review_med_hide'>
                            {/* <h3>Review 2</h3>
                            <p>Eirmod aliquyam sanctus sed est lorem consetetur dolore amet aliquyam.</p> */}
                            <div className="fb-post" data-href='https://www.facebook.com/brittany.tucker.79/posts/10215253836518950'  data-show-text='true'></div>
                        </div>
                        <div className='review_lrg_hide'>
                            {/* <h3>Review 3</h3>
                            <p>Aliquyam gubergren amet eos nonumy consetetur, accusam consetetur voluptua et.</p> */}
                            <div className="fb-post" data-href='https://www.facebook.com/carol.monacopowers/posts/10218762667766234'  data-show-text='true'></div>
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