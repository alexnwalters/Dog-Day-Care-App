import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLead from './nav_lead';
import NavItem from './nav_item';
import './header.css'

class Header extends Component{

    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
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
                    <NavLead title='Home' link='/' closeNav={this.closeNav}/>
                    <div className='header_nav_right'>
                        <NavItem title='About' link='/about' closeNav={this.closeNav} />
                        <NavItem title='Services' link='/services' closeNav={this.closeNav}/>
                        <NavItem title='Apply' link='/apply' closeNav={this.closeNav}/>
                    </div>
                    <FontAwesomeIcon icon='bars' className='header_nav_icon' onClick={this.setNavToggle}/>
                </div>
            </nav>
        )
    }
}
export default Header;