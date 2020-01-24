// reducers index
import { FETCHING_STARTED, FETCHING_SUCCESS, FETCHING_FAILURE, FETCHING_NAME_STARTED, FETCHING_NAME_SUCCESS, FETCHING_NAME_FAILURE } from '../actions';

export const initialState = {
    nameday: [],
    isFetching: false,
    error: '',
    namedays: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_STARTED:
        return {
            ...state,
            isFetching: true,
            error: ''
        };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                nameday: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            case FETCHING_NAME_STARTED:
                return {
                    ...state,
                    isFetching: true,
                    error: ''
                };
            case FETCHING_NAME_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    error: '',
                    namedayS: action.payload
                }
            case FETCHING_NAME_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        default:
            return state;
    }
}