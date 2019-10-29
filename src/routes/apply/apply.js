import React, { Component } from 'react';
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';
import './Apply.css'

class Apply extends Component {
    static defaultProps = {
        addApplication: () => {},
    }

    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div className='apply'>
                <h1 className='apply_main_title brushy'>Application</h1>
                <div className='apply_image'></div>
                <div>
                    <ApplicationForm addApplication={this.props.addApplication}/>
                </div>
            </div>
        )
    }
}

export default Apply;