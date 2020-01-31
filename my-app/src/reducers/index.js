import {FETCHING_JOKE_START,
     FETCHING_JOKE_SUCCESS,
      } from '../actions/index';

export const initialState={
    joke: [],
    isLoading:false,
    error: ''
};
export const reducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case FETCHING_JOKE_START:
            return{
                ...state,
                isLoading: true,
            }        
        case FETCHING_JOKE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                joke: action.payload
            }        
        // case FETCHING_JOKE_FAILURE:
        //     return{
        //         ...state,
        //         isLoading:false,
        //         error: action.payload
        //     }
        default: 
        return state;
    }
}; 