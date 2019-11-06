import React, { Component } from 'react';
import './ApplicationForm.css'
import RequestsApiService from '../../services/RequestsApiService';

class ApplicationForm extends Component {
    static defaultProps = {
        addApplication: () => {},
    }
  
    constructor(props){
        super(props)
        this.state = {
            application: {},
            confirmation: false,
            error: null
        }
    }

    //makes sure form renders when component is mounted
    renderApp() {
        this.setState({
            confirmation: false
        })
    }

    //changes to rendering if form submission is successful
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
            contact_name: contact_name.value,
            email: email.value,
            phone: phone.value,
            dog_name: dog_name.value,
            breed: breed.value,
            age_yrs: age_yrs.value,
            age_mos: age_mos.value,
            sex: sex.value,
            spayed: spayed.value,
            exam: exam.value, 
            vaccines: vaccines.value,
            medical: medical.value,
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
            status: 'Pending',
            service: service.value,
            care_date: care_date.value,
        }
        
        RequestsApiService.postRequest(application)
            .then(() => {
                this.renderConfirmation()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    //handles html of confirmation
    renderThankYou() {
        return (
            <div className='form_thanks'>
                <h1 className='form_thanks_title lora'>Thank You For Applying</h1>
                <div className='form_thanks_text open_sans'>
                    <p>My goal is to reply within 48 hours.</p>
                    <p>If your request is urgent, feel free to email me by clicking the mail icon below.</p>
                    <p>Don't forget to follow Pawsitive Vibez on Social Media!</p>
                </div>
            </div>
        )
    }

    render() {
        const today = new Date()
        const { error } = this.state

        return(
            <div className='application'>
            {(this.state.confirmation) 
                ? this.renderThankYou()
                : <form onSubmit={this.handleSubmit}>
                    <div className='form_field contact_field'>
                        <legend>Contact Information</legend>
                        <div>
                            <label htmlFor='contact_name'>Name:
                                <input type='text' name='contact_name' required/>
                            </label>
                            
                            <label htmlFor='email'>Email:
                                <input type='email' name='email' required/>
                            </label>

                            <label htmlFor='phone'>Phone:
                                <input type='tel'
                                    name='phone'
                                    pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
                                    required />
                            </label>

                            <div>
                                Which service are you inquiring about today?<br/>
                                <label htmlFor='service_day'>
                                    <input type='radio' id='service_day' name='service' value='Day Care' required/> Day Care
                                </label><br/>                        
                                <label htmlFor='service_night'>
                                    <input type='radio' id='service_night' name='service' value='Overnight Care'/> Overnight Boarding
                                </label>
                            </div>

                            <label htmlFor='care_date'> Date for Care:
                                <input type='date' name='care_date' min={`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 2}`} max='2029-12-31' required/>
                            </label>
                        </div>
                    </div>

                    <div className='form_field dog_field'>
                        <legend>Dog Details</legend>
                        <div>
                            <label htmlFor='dog_name'>Name:
                                <input type='text' name='dog_name' required/>
                            </label>
                            
                            <label htmlFor='breed'>Breed:
                                <input type='text' name='breed' required />
                            </label>
                            
                            <label htmlFor='age_yrs'>Age:
                                <input type='number' name='age_yrs' min='0' max='30' required /> yrs.
                                <input type='number' name='age_mos' min='0' max='11' required /> mos.
                            </label>

                            <div>
                                Sex:<br/>
                                <label htmlFor='male'>
                                    <input type='radio' id='male' name='sex' value='Male' required/> Male
                                </label><br/>
                                <label htmlFor='female'>
                                    <input type='radio' id='female' name='sex' value='Female'/> Female
                                </label>
                            </div>

                            <div>
                                Has your dog been Spayed or Neutered:<br/>
                                <label htmlFor='spayed_yes'>
                                    <input type='radio' id='spayed_yes' name='spayed' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='spayed_no'>
                                    <input type='radio' id='spayed_no' name='spayed' value='No'/> No
                                </label>
                            </div>

                            <label htmlFor='exam'>Month of last annual vet exam?
                                <input type='month' name='exam' min='2010-12' max={`${today.getFullYear()}-${today.getMonth() + 1}`} required/>
                            </label>

                            <div>
                                Is current on all vaccinations?<br/>
                                <small>*we require vaccinations against rabies, DHLPPC, and Bordetella</small><br/>
                                <label htmlFor='vaccines_yes'>                            
                                    <input type='radio' id='vaccines_yes' name='vaccines' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='vaccines_no'>
                                    <input type='radio' id='vaccines_no' name='vaccines' value='No'/> No
                                </label>
                            </div>

                            <label htmlFor='medical'>Describe any other medical history of note.</label> 
                            <textarea name='medical' rows='4' required></textarea>
                                <small>"N/A" or "None" if not applicable</small>
                        </div>
                    </div>

                    <div className='form_field behavioral_field'>
                        <legend>Behavioral Review</legend>
                        <div>
                            <div>
                                Has your dog ever attended day care or been boarded overnight?<br/>
                                <label htmlFor='prior_care_yes'>
                                    <input type='radio' id='prior_care_yes' name='prior_care' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='prior_care_no'>   
                                    <input type='radio' id='prior_care_no' name='prior_care' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Is your dog crate trained?<br/>
                                <label htmlFor='crate_yes'>
                                    <input type='radio' id='crate_yes' name='crate' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='crate_no'>
                                    <input type='radio' id='crate_no' name='crate' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Has your dog ever broken out of a crate or jumped a fence?<br/>
                                <label htmlFor='escape_yes'>
                                    <input type='radio' id='escape_yes' name='escape' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='escape_no'>
                                    <input type='radio' id='escape_no' name='escape' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Do you have any other pets in your home?<br/>
                                <label htmlFor='other_pets_yes'>
                                    <input type='radio' id='other_pets_yes' name='other_pets' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='other_pets_no'>
                                    <input type='radio' id='other_pets_no' name='other_pets' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Has your dog ever shown aggression to your other pets?<br/>
                                <label htmlFor='aggression_yes'>
                                    <input type='radio' id='aggression_yes' name='aggression' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='aggression_no'>
                                    <input type='radio' id='aggression_no' name='aggression' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Does your dog growl when thier food, bones, or toys are taken away?<br/>
                                <label htmlFor='growl_yes'>
                                    <input type='radio' id='growl_yes' name='growl' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='growl_no'>
                                    <input type='radio' id='growl_no' name='growl' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Does your dog growl when thier food, bones, or toys are approached by other dogs?<br/>
                                <label htmlFor='growl_other_yes'>
                                    <input type='radio' id='growl_other_yes' name='growl_other' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='growl_other_no'>
                                    <input type='radio' id='growl_other_no' name='growl_other' value='No'/> No
                                </label>
                            </div>

                            <div>
                                Has your dog ever bitten another dog or human?<br/>
                                <label htmlFor='bite_yes'>
                                    <input type='radio' id='bite_yes' name='bite' value='Yes' required/> Yes
                                </label><br/>
                                <label htmlFor='bite_no'>
                                    <input type='radio' id='bite_no' name='bite' value='No'/> No
                                </label>
                            </div>

                            <label htmlFor='bite_details'>If the bite broke the skin, describe the circumstance?*</label>
                                <textarea name='bite_details' rows='4' required></textarea>
                            
                            <label htmlFor='children'>How does your dog react to children?*</label>
                                <textarea name='children' rows='4' required></textarea>
                            
                            <label htmlFor='visitors'>How does your dog react to visitors?*</label>
                                <textarea name='visitors' rows='4' required></textarea>
                            
                            <label htmlFor='absent'>How does your dog react to your absence?*</label>
                                <textarea name='absent' rows='4' required></textarea>
                                <small>* "N/A" or "None" if not applicable</small>
                        </div>                    
                    </div>
                    <div role='alert'>
                        {error && <p className='red'>Something went wrong. Please try again.</p>}
                    </div>
                    <input type='submit' />
                </form> }
            </div>
        )
    }
}

export default ApplicationForm