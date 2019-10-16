import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
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
                        <Link to='/' onClick={this.closeNav}> 
                            <FontAwesomeIcon icon='home' className='header_nav_lead'/>
                        </Link> 
                    <div className='header_nav_right'>
                        <Link to='/About' onClick={this.closeNav}>About</Link>
                        <Link to='/Services' onClick={this.closeNav}>Services</Link>
                        <Link to='/Apply' onClick={this.closeNav}>Apply</Link>
                    </div>
                    <FontAwesomeIcon icon='bars' className='header_nav_icon' onClick={this.setNavToggle}/>
                </div>
            </nav>
        )
    }
}
export default Header;