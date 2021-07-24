import axios from 'axios';
import { TOKEN, URL } from "./constants";

axios.defaults.baseURL = URL;

export const getFastRiderRides = async (callbackSucss, callbackFailur) => {
    axios.get('/v1/rides', { params: { token: TOKEN } })
        .then(response => {
            callbackSucss(response.data)
        })
        .catch(response => {
            
            callbackFailur(response);
        });
};

export const postFastRiderTikets = async (callbackSucss, callbackFailur, pin, ride_id) => {
   
    axios.post('/v1/tickets', { token: TOKEN, pin: pin, ride_id: ride_id })
        .then(response => {
            callbackSucss(response);
        })
       
        .catch(response => {
            callbackFailur(response);
        });
};





