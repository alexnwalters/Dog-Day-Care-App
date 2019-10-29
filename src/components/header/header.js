import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../utils/images/FreddieLogo.jpg'
import './Header.css'

class Header extends Component{

    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
            focus_class: {
                about: '',
                services: '',
                apply: '',
            }
        }
    }

    setNavToggle = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled'
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }

    closeNav = () => {
        this.setState({
            menu_class: '',
        })
    }

    render() {
        let top_menu_class = `header_nav ${this.state.menu_class}`

        return(
            <nav className='header'>
                <div className={top_menu_class}>                    
                        <Link to='/' onClick={this.closeNav}> 
                            <FontAwesomeIcon icon='dog' className='header_nav_lead'/>
                            <img className='header_freddie_icon' src={Logo} alt='logo'></img>
                        </Link> 
                    <div className='header_nav_right open_sans'>
                        <NavLink to='/About' activeClassName='highlighted' onClick={this.closeNav}>About</NavLink>
                        <NavLink to='/Services' activeClassName='highlighted' onClick={this.closeNav}>Services</NavLink>
                        <NavLink to='/Apply' activeClassName='highlighted' onClick={this.closeNav}>Apply</NavLink>
                    </div>
                    <FontAwesomeIcon icon='bars' className='header_nav_icon' onClick={this.setNavToggle}/>
                    <FontAwesomeIcon icon='window-close' className='header_nav_close' onClick={this.setNavToggle}/>
                </div>
            </nav>
        )
    }
}
export default Header;