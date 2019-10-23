import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Logo from '../../utils/images/FreddieLogo.jpg';
import ServicesBanner from '../../utils/images/freddie_banner_1.jpg';

class Welcome extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className='welcome'>
                <div className='welcome_hero'>
                    <img className='welcome_hero_image' src={Logo}></img>
                    <div className='welcome_hero_overview'>
                        <h1>Welcome to Pawsitive Vibez!</h1>
                        <p>We specialize in doggie daycare and overnight boarding.</p>
                        <p>Our goal is to provide your pet with the positive socialization they miss when you are away.</p>
                        <p>Located in Adamstown, MD we supply ample space for your run free.</p>
                        <button><Link to='/about'> more about us</Link></button>
                    </div>
                </div>

                <div className="welcome_services">
                    <img className='welcome_services_banner_image' src={ServicesBanner}></img>
                    <div className='welcome_services_banner'>
                        <h2>Our Sevices</h2>
                    </div>
                    <ul>
                        <li>
                            <h3>Daycare</h3>
                            <p>Need to run some errands? Long work days?</p>
                            <p>Don't Stess, we can take care of your furry friend during the day.</p>
                            <p>Your dog can become part of the pack today!</p>
                            <button><Link to='/services'>Learn more...</Link></button>
                        </li>
                        <li>
                            <h3>Overnight Boarding</h3>
                            <p>Accusam nonumy justo justo clita est eirmod sanctus vero kasd sed. Justo et sed kasd.</p>
                            <button><Link to='/services'>more info...</Link></button>
                        </li>
                    </ul>
                </div>
        
                <div>
                    <h2>What Our Friends Are Saying</h2>
                    <div className='welcome_reviews'>
                        <div className='welcome_review_contianer'>
                            <div className="fb-post" data-href='https://www.facebook.com/linzy.french/posts/10157032548594902' data-width='350' data-show-text='true'></div>
                        </div>
                        <div className='welcome_review_contianer'>
                            <div className="fb-post" data-href='https://www.facebook.com/brittany.tucker.79/posts/10215253836518950' data-width='350'  data-show-text='true'></div>
                        </div>
                        <div className='welcome_review_contianer'>
                            <div className="fb-post" data-href='https://www.facebook.com/carol.monacopowers/posts/10218762667766234' data-width='350'  data-show-text='true'></div>
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