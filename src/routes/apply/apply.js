import React, { Component } from 'react';
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';

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
            <div>
                <h1>Application</h1>
                <div>
                    <ApplicationForm addApplication={this.props.addApplication}/>
                </div>
            </div>
        )
    }
}

export default Apply;