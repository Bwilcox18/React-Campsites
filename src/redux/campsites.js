import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, actions) => {
    switch (actions.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: actions.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading:false, errMess: actions.payload};
        default:
            return state;
    }
};