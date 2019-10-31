import React, { Component } from 'react';
import './About.css'

class About extends Component {

    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }

    render(){
        return(
            <div className='about'>
                <h1 className='about_main_title'>About Us</h1>
                <div className='about_people'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Our People</h3>                    
                        <div className='about_details'>
                            <p>Hi there!  My name is Maria Drader.  I am so glad you decided to visit my site!  After 3 years of managing a doggie daycare and providing boarding, walks, and house visits, I decided to branch out and open a business of my very own.</p>
                            <p>I live in Adamstown, MD with my husband and our 6 year old White German Shepherd named Freddie.</p>
                            <p>Freddie is a rescue from K-9 Lifesavers and is also a graduate of a balanced dog training program :)</p>
                            <p>I am an avid dog lover and can't wait to assist you and your fur child during your busy work day or while on vacation.</p>
                        </div>
                    </div>
                </div>
                <div className='about_culture'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Our Culture</h3>                    
                        <div className='about_details'>
                            <p>We specialize in group play which is monitored at all times to ensure a safe environment.</p>
                            <p>I have experience with many different breeds of all ages and personalities.</p>
                            <p>The company is bonded and insured, and I can provide a current background check upon request.  I am also a proud member of Pet Sitters International.</p>
                        </div>
                    </div>
                </div>
                <div className='about_facilities'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Our Facilities</h3>                    
                        <div className='about_details'>
                            <p>My location sits on 2 acres with over 1 acre securely fenced in for your pup to play and get all the exercise he or she needs!</p>
                            <p>Your dog will be treated like my own in a clean, safe, and smoke-free home.</p>
                        </div>
                    </div>
                </div>
                <div className='about_memberships'>
                    <div className='about_memberships_bic'></div>
                    <div className='about_memberships_logo'></div>
                    <div className='about_memberships_psi'></div>                        
                </div>
            </div>
        )
    }
}

export default About;