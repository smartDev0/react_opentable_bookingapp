import { wrapRequest, xapi } from '../utils';

const getSearch = wrapRequest(async params =>
    xapi().get(`/api/restaurants?city=${params.city}`)

);

export {
    getSearch,
};
