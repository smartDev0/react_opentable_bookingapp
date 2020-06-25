import { createActions } from 'redux-actions';

const {
    getSearch,
    getSearchSucceed,
    getSearchFailed,
} = createActions({
    GET_SEARCH: params => ({ params }),
    GET_SEARCH_SUCCEED: searches => ({ searches }),
    GET_SEARCH_FAILED: error => ({ error }),
});

export {
    getSearch,
    getSearchSucceed,
    getSearchFailed,
};
