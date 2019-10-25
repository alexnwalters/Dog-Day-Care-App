import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Logo from '../../utils/images/FreddieLogo.jpg';

class Welcome extends Component {

    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return(
            <div className='welcome'>
                <div className='welcome_hero'>
                    <img className='welcome_hero_image' src={Logo} alt='logo'></img>
                    <div className='welcome_hero_overview'>
                        <h1>Welcome to Pawsitive Vibez!</h1>
                        <p>We specialize in doggie daycare and overnight boarding.</p>
                        <p>Our goal is to provide your pet with the positive socialization they miss when you are away.</p>
                        <p>Located in Adamstown, MD we supply ample space for your run free.</p>
                        <button><Link to='/about'> Learn more about us...</Link></button>
                    </div>
                </div>

                <div className="welcome_services">
                    <div className='welcome_image'></div>
                    <h2>Our Sevices</h2>  
                    <ul>
                        <li>
                            <div className='welcome_services_type_title'> 
                                <h3>Daycare</h3>
                            </div>
                            <div className='welcome_services_details'>
                                <p>Need to run some errands? Long work days?</p>
                                <p>Don't stress, we can take care of your furry friend during the day.</p>
                                <p>Your dog can become part of the pack today!</p>
                                <button><Link to='/services'>Learn more...</Link></button>
                            </div>
                        </li>
                        <div className='welcome_services_break_container'></div>
                        <li>
                            <div className='welcome_services_type_title'> 
                                <h3>Overnight Boarding</h3>
                            </div>
                            <div  className='welcome_services_details'>
                                <p>Going away for the weekend or having a late date night?</p>
                                <p>We can accomdate overnight stays.</p>
                                <p>Let our pup join the sleepover!</p>
                                <button><Link to='/services'>Learn more...</Link></button>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div>
                    <div className='welcome_reviews'>
                        <div className='welcome_image'></div>
                        
                        <div className='welcome_reviews_container'>
                            <h2 className='welcome_title'>What Our Friends Are Saying</h2>
                            <div className='welcome_facebook_container'>
                                <div className="fb-post" data-href='https://www.facebook.com/linzy.french/posts/10157032548594902' data-width='350' data-show-text='true'></div>
                                <div className="fb-post" data-href='https://www.facebook.com/carol.monacopowers/posts/10218762667766234' data-width='350'  data-show-text='true'></div>
                                <div className="fb-post" data-href='https://www.facebook.com/brittany.tucker.79/posts/10215253836518950' data-width='350'  data-show-text='true'></div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className='welcome_apply'>
                    <div className='welcome_image'></div>
                    <h2 className='welcome_title'>Apply Today!</h2>
                    <button><Link to='/apply'>Start Application</Link></button>
                    <p>Contact me for your boarding, daycare, and transportation needs and I will gladly help!</p>
                </div>
            </div> 
        )
    }
}

export default Welcome;