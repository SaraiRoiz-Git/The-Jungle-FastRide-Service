import axios from 'axios';
import { TOKEN, URL } from "./constants";

axios.defaults.baseURL = URL;

export const getFastRiderRides = async (callbackSuccess, callbackFailur) => {
    axios.get('/v1/rides', { params: { token: TOKEN } })
        .then(response => {
            callbackSuccess(response.data)
        })
        .catch(response => {

            callbackFailur(response);
        });
};

export const postFastRiderTikets = async (callbackSuccess, callbackFailur, pin, ride_id) => {

    axios.post('/v1/tickets', { token: TOKEN, pin: pin, ride_id: ride_id })
        .then(response => {
            callbackSuccess(response);
        })

        .catch(response => {
            callbackFailur(response);
        });
};





