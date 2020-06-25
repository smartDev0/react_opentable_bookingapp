import { handleActions } from 'redux-actions';

import {
    getSearches,getSearchesFailed,getSearchesSucceed
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
    [getSearches](state) {
        return {
            ...state,
            error: null,
            loading: true,
            message: 'Generating serach lists...'
        }
    },
    [getSearchesFailed](state, { payload: { error } }) {
        return {
            ...state,
            error,
            loading: false
        }
    },
    [getSearchesSucceed](state, { payload: { searches } }) {
        return {
            ...state,
            loading: false,
            searches
        }
    }
}, defaultState);

export default reducer;