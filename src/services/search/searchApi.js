import { wrapRequest, xapi } from '../utils';

const getSearch = wrapRequest(async params =>{
    console.log(params)
    xapi().get(`/api/restaurants?city=${params.city}`)
}
);

export {
    getSearch,
};
