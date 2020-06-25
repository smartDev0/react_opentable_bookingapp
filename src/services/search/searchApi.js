import { wrapRequest, xapi } from '../utils';

const getSearches = wrapRequest(async params =>
    xapi().get(`/api/restaurants?city=${params.city}&address=${params.address}&area=${params.area}`)

);

export {
    getSearches,
};
