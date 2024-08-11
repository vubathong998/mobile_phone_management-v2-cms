import { api } from '../api';
import { phonesCreate } from './queries/PhonesCreate';
import { phonesGetByPage } from './queries/phonesGetByPage';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        phonesGetByPage: phonesGetByPage(builder),
        phonesCreate: phonesCreate(builder)
    })
});

export default queries;
