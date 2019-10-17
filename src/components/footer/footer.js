import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

class Footer extends Component{
    render() {
        return(
            <nav className='footer'>
                <div className='footer_nav'>
                    <div className='footer_contacts'>
                        <a href='mailto:test@test.com?Subject=Hello%20Dog%20Day%20Care' target='blank'>
                            <FontAwesomeIcon icon='envelope' className='footer_icons'/>
                        </a>
                        <a href='https://www.facebook.com/pawsitivevibezmd/' target='blank'>
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} className='footer_icons'/>
                        </a>
                        <a href='https://www.instagram.com/pawsitivevibezmd/' target='blank'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} className='footer_icons'/>   
                        </a>                                          
                    </div>
                    <Link to='/login'>Admin Login</Link>
                </div>
            </nav>
        )
    }
}
export default Footer