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
                        <FontAwesomeIcon icon='envelope' className='footer_icons'>
                            <a href='mailto:test@test.com?Subject=Hello%20Dog%20Day%20Care' target='blank'>Email</a>
                        </FontAwesomeIcon>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} className='footer_icons'/>
                        <FontAwesomeIcon icon={['fab', 'instagram']} className='footer_icons'/>                     
                    </div>
                    <Link to='/login'>Admin Login</Link>
                </div>
            </nav>
        )
    }
}
export default Footer