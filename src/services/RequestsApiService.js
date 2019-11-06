import config from '../config'
import TokenService from './TokenService'

//handles services for API requests endpoints
const RequestsApiService = {
    getRequests(){
        return fetch(`${config.API_ENDPOINT}/requests`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postRequest(newRequest){
        return fetch(`${config.API_ENDPOINT}/requests`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newRequest),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    changeRequestStatus(accepted, request_id){
        return fetch(`${config.API_ENDPOINT}/requests/${request_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(accepted)
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
        })
    },
    deleteRequest(request_id) {
        return fetch(`${config.API_ENDPOINT}/requests/${request_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
        })
    },
}

export default RequestsApiService