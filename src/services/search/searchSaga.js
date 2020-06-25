import { put, takeEvery, call, all } from 'redux-saga/effects';

// Import Actions
import {
    getSearches as getSearchAction,
    getSearchesFailed,
    getSearchesSucceed
} from './searchActions';

// Import API
import * as searchApi from './searchApi';

export function* searchSubscriber() {
    yield all([takeEvery('GET_SEARCHES', getSearches)]);
}

export function* getSearches({ payload: { params } }) {
    try {
        const searches = yield call(searchApi.getSearches, params);
        yield put(getSearchesSucceed(searches));
    } catch (error) {
        console.error(error);
        yield put(getSearchesFailed(error));
    }
}

