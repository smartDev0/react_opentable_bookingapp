import { handleActions } from 'redux-actions';

import {
getSearch,getSearchFailed,getSearchSucceed
} from './searchActions';

const defaultState = {
    searches: null,
    error: null,
    loading: false,
    message: '',
    success: false,
    currentSearch: null
};

const reducer = handleActions({
    [getSearch](state) {
        return {
            ...state,
            error: null,
            loading: true,
            message: 'Generating serach lists...'
        }
    },
    [getSearchFailed](state, { payload: { error } }) {
        return {
            ...state,
            error,
            loading: false
        }
    },
    [getSearchSucceed](state, { payload: { searches } }) {
        return {
            ...state,
            loading: false,
            searches
        }
    }
}, defaultState);

export default reducer;