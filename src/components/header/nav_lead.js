import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLead extends Component {
    
    closeNav = (e) => {
        this.props.closeNav && this.props.closeNav(e)
    }

    render() {
        return(
            <div className='header_nav_lead'>
                <Link to={this.props.link} onClick={e => {this.closeNav(e)}}> {this.props.title} </Link>
            </div>
        )
    }
}

export default NavLead