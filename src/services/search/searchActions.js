import { createActions } from 'redux-actions';

const {
    getSearches,
    getSearchesSucceed,
    getSearchesFailed,
} = createActions({
    GET_SEARCHES: params => ({ params }),
    GET_SEARCHES_SUCCEED: searches => ({ searches }),
    GET_SEARCHES_FAILED: error => ({ error }),
});

export {
    getSearches,
    getSearchesSucceed,
    getSearchesFailed,
};
