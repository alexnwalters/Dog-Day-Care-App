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

    renderFacebook() {
        return (
            <div className='welcome_facebook_container'>
                <div className="fb-post" data-href='https://www.facebook.com/linzy.french/posts/10157032548594902' data-width='350' data-show-text='true'></div>
                <div className="fb-post" data-href='https://www.facebook.com/carol.monacopowers/posts/10218762667766234' data-width='350'  data-show-text='true'></div>
                <div className="fb-post" data-href='https://www.facebook.com/brittany.tucker.79/posts/10215253836518950' data-width='350'  data-show-text='true'></div>
            </div>
        )
    }

    render() {
        return(
            <div className='welcome welcome_grid'>
                <div className='welcome_hero'>
                    <img className='welcome_hero_image' src={Logo} alt='logo'></img>
                    <div className='welcome_hero_overview lora'>
                        <h1 className='brushy'>Welcome to Pawsitive Vibez!</h1>
                        <p>We specialize in doggie day care and overnight boarding.</p>
                        <p>Our goal is to provide your pet with the positive socialization they miss when you are away.</p>
                        <p>Located in Adamstown, MD we supply ample space for your run free.</p>
                        <Link to='/about' className='welcome_link'> Learn more about us...</Link>
                    </div>
                </div>
                <div className="welcome_services">
                    <div className='welcome_image'></div>
                    <h2 className='welcome_title'>What We Do...
                        <br></br><span className='brushy_swash'>f</span>
                    </h2>
                    <ul>
                        <li>
                            <div className='welcome_services_type_title'> 
                                <h3>Day Care</h3>
                            </div>
                            <div className='welcome_services_details'>
                                <p>Need to run some errands? Long work days away from?</p>
                                <p>Don't stress, we can take care of your furry friend during the day.</p>
                                <p>Your dog can become part of the pack today!</p>
                                <Link to='/services' className='welcome_link'>Learn more...</Link>
                            </div>
                        </li>
                        
                        <li>
                            <div className='welcome_services_type_title'> 
                                <h3>Overnight Boarding</h3>
                            </div>
                            <div className='welcome_services_details'>
                                <p>Going away for the weekend or having a late date night?</p>
                                <p>We can accomdate overnight stays.</p>
                                <p>Let our pup join the sleepover!</p>
                                <Link to='/services' className='welcome_link'>Learn more...</Link>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className='welcome_reviews'>
                        <div className='welcome_image'></div>
                        
                        <div className='welcome_reviews_container'>
                            <h2 className='welcome_title'>What Our Friends Are Saying!
                                <br></br><span className='brushy_swash'>a</span>
                            </h2>
                            {this.renderFacebook()}
                        </div>
                    </div>
                </div>

                <div className='welcome_apply'>
                    <div className='welcome_image'></div>
                    <h2 className='welcome_title'>Apply Today!
                        <br></br><span className='brushy_swash'>u</span>
                    </h2>
                    <div  className='welcome_services_details lora'>
                        <button><Link to='/apply'>Start Application</Link></button>
                        <p>Contact me for your boarding, day care, and transportation needs and I will gladly help!</p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Welcome;