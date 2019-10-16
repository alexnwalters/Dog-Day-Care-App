import React, { Component } from 'react';
import './application-form.css'

class ApplicationForm extends Component {
    static defaultProps = {
        addApplication: () => {},
    }
  
    constructor(props){
        super(props)
        this.state = {
            application: {},
            confirmation: false
        }
    }

    renderApp() {
        this.setState({
            confirmation: false
        })
    }

    renderConfirmation() {
        this.setState({
            confirmation: true
        })
    }

    componentDidMount(){
        this.renderApp()
    }

    handleSubmit = e => {
        e.preventDefault()

        const { contact_name, email, phone, service, care_date, dog_name, breed, age_yrs, age_mos,
                sex, spayed, exam, vaccines, medical, prior_care, crate, escape, other_pets,
                aggression, growl, growl_other, bite, bite_details, children, visitors, absent } = e.target

        const application = {
            contact_info: {
                contact_name: contact_name.value,
                email: email.value,
                phone: phone.value,
            },
            dog_info: {
                dog_name: dog_name.value,
                breed: breed.value,
                age_yrs: age_yrs.value,
                age_mos: age_mos.value,
                sex: sex.value,
                spayed: spayed.value,
                exam: exam.value, 
                vaccines: vaccines.value,
                medical: medical.value,
            },
            behavioral_info: {
                prior_care: prior_care.value,
                crate: crate.value,
                escape: escape.value,
                other_pets: other_pets.value,
                aggression: aggression.value,
                growl: growl.value,
                growl_other: growl_other.value,
                bite: bite.value,
                bite_details: bite_details.value,
                children: children.value,
                visitors: visitors.value,
                absent: absent.value,
            },
            service_info: {
                status: 'Pending',
                service: service.value,
                care_date: care_date.value,
            }
        }
        
        this.props.addApplication(application)
        this.renderConfirmation()
    }

    render() {
        return(
            <div>
            { (this.state.confirmation) 
                ? <h1>Thank You For Applying</h1>
                : <form onSubmit={this.handleSubmit}>
                    <fieldset className='form_section'>
                        <legend>Contact Information</legend>
                        <label htmlFor='contact_name'>Name:</label>
                            <input type='text' name='contact_name' required/>
                        
                        <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' /*required*//>
                        
                        <label htmlFor='phone'>Phone:</label>
                            <input type='tel'
                                name='phone'
                                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                /*required*/ />
                            <small>Format: 123-456-7890</small>
                        
                        <label htmlFor='service'>Which service are you inquiring about today?<br/>
                            <input type='radio' name='service' value='Day Care' /*required*//> Day Care<br/>
                            <input type='radio' name='service' value='Overnight Care'/> Overnight Care
                        </label>
                        <label htmlFor='care_date'> Date for Care:</label>
                            <input type='date' name='care_date' required/>
                        
                    </fieldset>

                    <fieldset className='form_section'>
                        <legend>Dog Details</legend>
                        <label htmlFor='dog_name'>Name:</label>
                            <input type='text' name='dog_name' required/>
                        
                        <label htmlFor='breed'>Breed:</label>
                            <input type='text' name='breed' /*required*/ />
                        
                        <label htmlFor='age_yrs'>Age:<br/>
                            <input type='number' name='age_yrs' min='0' max='30' placeholder='0' /*required*/ /> yrs.<br/>
                            <input type='number' name='age_mos' min='0' max='12' placeholder='0' /*required*/ /> mos.
                        </label>

                        <label htmlFor='sex'>Sex:<br/>
                            <input type='radio' name='sex' value='Male'/> Male<br/>
                            <input type='radio' name='sex' value='Female'/> Female
                        </label>

                        <label htmlFor='spayed'>Has your dog been Spayed or Neutered:<br/>
                            <input type='radio' name='spayed' value='Yes' /*required*//> Yes<br/>
                            <input type='radio' name='spayed' value='No'/> No
                        </label>

                        <label htmlFor='exam'>Month of last annual vet exam?</label>
                            <input type='month' name='exam' /*required*//>
                        
                        <label htmlFor='vaccines'>Is current on all vaccinations?<br/>
                            <small>*we require vaccinations against rabies, DHLPPC, and Bordetella</small><br/>
                            <input type='radio' name='vaccines' value='Yes' /*required*//> Yes<br/>
                            <input type='radio' name='vaccines' value='No'/> No
                        </label>

                        <label htmlFor='medical'>Describe any other medical history of note.</label> 
                            <input type='text' name='medical'/> 
                        
                    </fieldset>

                    <fieldset className='form_section'>
                        <legend>Behavioral Review</legend>
                        <label htmlFor='prior_care'>Has your dog ever attended day care or been boarded overnight?<br/>
                            <input type='radio' name='prior_care' value='Yes'/> Yes<br/>
                            <input type='radio' name='prior_care' value='No'/> No
                        </label>

                        <label htmlFor='crate'>Is your dog crate trained?<br/>
                            <input type='radio' name='crate' value='Yes'/> Yes<br/>
                            <input type='radio' name='crate' value='No'/> No
                        </label>

                        <label htmlFor='escape'>Has your dog ever broken out of a crate or jumped a fence?<br/>
                            <input type='radio' name='escape' value='Yes'/> Yes<br/>
                            <input type='radio' name='escape' value='No'/> No
                        </label>

                        <label htmlFor='other_pets'>Do you have any other pets in your home?<br/>
                            <input type='radio' name='other_pets' value='Yes'/> Yes<br/>
                            <input type='radio' name='other_pets' value='No'/> No
                        </label>

                        <label htmlFor='aggression'>Has your dog ever shown aggression to your other pets?<br/>
                            <input type='radio' name='aggression' value='Yes'/> Yes<br/>
                            <input type='radio' name='aggression' value='No'/> No
                        </label>
                        
                        <label htmlFor='growl'>Does your dog growl when thier food, bones, or toys are taken away?<br/>
                            <input type='radio' name='growl' value='Yes'/> Yes<br/>
                            <input type='radio' name='growl' value='No'/> No
                        </label>
                        
                        <label htmlFor='growl_other'>Does your dog growl when thier food, bones, or toys are approached by other dogs?<br/>
                            <input type='radio' name='growl_other' value='Yes'/> Yes<br/>
                            <input type='radio' name='growl_other' value='No'/> No
                        </label>
                        
                        <label htmlFor='bite'>Has your dog ever bitten another dog or human?<br/>
                            <input type='radio' name='bite' value='Yes'/> Yes<br/>
                            <input type='radio' name='bite' value='No'/> No
                        </label>
                        
                        <label htmlFor='bite_details'>If the bite broke the skin, describe the circumstance?</label>
                            <input type='text' name='bite_details'/>
                        
                        <label htmlFor='children'>How does your dog react to children?</label>
                            <input type='text' name='children'/>
                        
                        <label htmlFor='visitors'>How does your dog react to visitors?</label>
                            <input type='text' name='visitors'/>
                        
                        <label htmlFor='absent'>How does your dog react to your absence?</label>
                            <input type='text' name='absent'/>
                        
                    </fieldset>
                    <input type='submit' />
                </form> }
            </div>
        )
    }
}

export default ApplicationForm