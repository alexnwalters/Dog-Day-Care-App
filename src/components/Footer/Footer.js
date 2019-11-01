import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <nav className='footer_nav'>
                <div className='footer_contacts'>
                    <a href='mailto:test@test.com?Subject=Hello%20Dog%20Day%20Care' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon='envelope' className='footer_icons'/>
                    </a>
                    <a href='https://www.facebook.com/pawsitivevibezmd/' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} className='footer_icons'/>
                    </a>
                    <a href='https://www.instagram.com/pawsitivevibezmd/' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} className='footer_icons'/>   
                    </a>                                          
                </div>
                <Link to='/login' className='open_sans'>Admin Login</Link>              
            </nav>
        )
    }
}
export default Footer