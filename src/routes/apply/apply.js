import React, { Component } from 'react';
import ApplicationForm from '../../components/application-form/application-form';

class Apply extends Component {
    static defaultProps = {
        addApplication: () => {},
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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