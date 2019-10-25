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
            .catch()
    }

    render() {
        const today = new Date()
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
                            <input type='email' name='email' required/>
                        
                        <label htmlFor='phone'>Phone:</label>
                            <input type='tel'
                                name='phone'
                                pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
                                required />
                            <small>Must be 10 digits</small>
                        
                        <label htmlFor='service'>Which service are you inquiring about today?<br/>
                            <input type='radio' name='service' value='Day Care' required/> Day Care<br/>
                            <input type='radio' name='service' value='Overnight Care'/> Overnight Care
                        </label>
                        <label htmlFor='care_date'> Date for Care:</label>
                            <input type='date' name='care_date' min={`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 2}`} max='2029-12-31' required/>
                        
                    </fieldset>

                    <fieldset className='form_section'>
                        <legend>Dog Details</legend>
                        <label htmlFor='dog_name'>Name:</label>
                            <input type='text' name='dog_name' required/>
                        
                        <label htmlFor='breed'>Breed:</label>
                            <input type='text' name='breed' required />
                        
                        <label htmlFor='age_yrs'>Age:<br/>
                            <input type='number' name='age_yrs' min='0' max='30' required /> yrs.<br/>
                            <input type='number' name='age_mos' min='0' max='11' required /> mos.
                        </label>

                        <label htmlFor='sex'>Sex:<br/>
                            <input type='radio' name='sex' value='Male' required/> Male<br/>
                            <input type='radio' name='sex' value='Female'/> Female
                        </label>

                        <label htmlFor='spayed'>Has your dog been Spayed or Neutered:<br/>
                            <input type='radio' name='spayed' value='Yes' required/> Yes<br/>
                            <input type='radio' name='spayed' value='No'/> No
                        </label>

                        <label htmlFor='exam'>Month of last annual vet exam?</label>
                            <input type='month' name='exam' min='2010-12' max={`${today.getFullYear()}-${today.getMonth() + 1}`} required/>
                        
                        <label htmlFor='vaccines'>Is current on all vaccinations?<br/>
                            <small>*we require vaccinations against rabies, DHLPPC, and Bordetella</small><br/>
                            <input type='radio' name='vaccines' value='Yes' required/> Yes<br/>
                            <input type='radio' name='vaccines' value='No'/> No
                        </label>

                        <label htmlFor='medical'>Describe any other medical history of note.</label> 
                            <input type='text' name='medical' required/>
                            <small>*type 'n/a' or 'none' if not applicable</small>
                        
                    </fieldset>

                    <fieldset className='form_section'>
                        <legend>Behavioral Review</legend>
                        <label htmlFor='prior_care'>Has your dog ever attended day care or been boarded overnight?<br/>
                            <input type='radio' name='prior_care' value='Yes' required/> Yes<br/>
                            <input type='radio' name='prior_care' value='No'/> No
                        </label>

                        <label htmlFor='crate'>Is your dog crate trained?<br/>
                            <input type='radio' name='crate' value='Yes' required/> Yes<br/>
                            <input type='radio' name='crate' value='No'/> No
                        </label>

                        <label htmlFor='escape'>Has your dog ever broken out of a crate or jumped a fence?<br/>
                            <input type='radio' name='escape' value='Yes' required/> Yes<br/>
                            <input type='radio' name='escape' value='No'/> No
                        </label>

                        <label htmlFor='other_pets'>Do you have any other pets in your home?<br/>
                            <input type='radio' name='other_pets' value='Yes' required/> Yes<br/>
                            <input type='radio' name='other_pets' value='No'/> No
                        </label>

                        <label htmlFor='aggression'>Has your dog ever shown aggression to your other pets?<br/>
                            <input type='radio' name='aggression' value='Yes' required/> Yes<br/>
                            <input type='radio' name='aggression' value='No'/> No
                        </label>
                        
                        <label htmlFor='growl'>Does your dog growl when thier food, bones, or toys are taken away?<br/>
                            <input type='radio' name='growl' value='Yes' required/> Yes<br/>
                            <input type='radio' name='growl' value='No'/> No
                        </label>
                        
                        <label htmlFor='growl_other'>Does your dog growl when thier food, bones, or toys are approached by other dogs?<br/>
                            <input type='radio' name='growl_other' value='Yes' required/> Yes<br/>
                            <input type='radio' name='growl_other' value='No'/> No
                        </label>
                        
                        <label htmlFor='bite'>Has your dog ever bitten another dog or human?<br/>
                            <input type='radio' name='bite' value='Yes' required/> Yes<br/>
                            <input type='radio' name='bite' value='No'/> No
                        </label>
                        
                        <label htmlFor='bite_details'>If the bite broke the skin, describe the circumstance?*</label>
                            <textarea name='bite_details' rows='4' required></textarea>
                        
                        <label htmlFor='children'>How does your dog react to children?*</label>
                            <textarea type='textarea' rows='4' required></textarea>
                        
                        <label htmlFor='visitors'>How does your dog react to visitors?*</label>
                            <textarea type='textarea' rows='4' required></textarea>
                        
                        <label htmlFor='absent'>How does your dog react to your absence?*</label>
                            <textarea type='textarea' rows='4' required></textarea>
                            <small>* type 'n/a' or 'none' if not applicable</small>
                            
                        
                    </fieldset>
                    <input type='submit' />
                </form> }
            </div>
        )
    }
}

export default ApplicationForm