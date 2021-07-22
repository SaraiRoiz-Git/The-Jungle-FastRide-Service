import * as AT from './actionsTypes'

export const onEnter = (data) => dispatch => {
    return (dispatch({
        type: AT.ON_ENTER,
        payload: data
    }))
}

export const onSubmit = (ticket) => dispatch => {
    return (dispatch({
        type: AT.ON_SUBMIT,
        payload: ticket
    }))
}

export const onRideChoose = (id) => dispatch => {
    return (dispatch({
        type: AT.ID,
        payload: id
    }))
}

export const onError = (error) => dispatch => {
    return (dispatch({
        type: AT.ON_ERROR,
        payload: error
    }))
}