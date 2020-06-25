import { wrapRequest, xapi } from '../utils';

const getSearch = wrapRequest(async params =>
    xapi().get('/api/restaurants', {
        params
    })
    
);

export {
    getSearch,
};
