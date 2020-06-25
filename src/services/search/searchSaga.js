import { put, takeEvery, call, all } from 'redux-saga/effects';

// Import Actions
import {
    getSearch as getSearchAction,
    getSearchFailed,
    getSearchSucceed
} from './searchActions';

// Import API
import * as searchApi from './searchApi';

export function* searchSubscriber() {
    yield all([takeEvery('GET_SEARCH', getSearch)]);
}

export function* getSearch({ payload: { params } }) {
    try {
        const searches = yield call(searchApi.getSearch, params);
        yield put(getSearchSucceed(searches));
    } catch (error) {
        console.error(error);
        yield put(getSearchFailed(error));
    }
}

