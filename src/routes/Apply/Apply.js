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
                <h1 className='apply_main_title brushy'>Application
                    <br></br><span className='brushy_swash'>l</span>
                </h1>
                <div className='apply_container'>
                    <div className='apply_image_container'>
                        <div className='apply_image banner'></div>
                        <div className='apply_image image_1'></div>
                        <div className='apply_image image_2'></div>
                        <div className='apply_image image_3'></div>
                        <div className='apply_image image_4'></div>
                    </div>
                    <div>
                        <ApplicationForm addApplication={this.props.addApplication}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Apply;