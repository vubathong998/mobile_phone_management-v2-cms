import { api } from '../api';
import { login } from './queries/login';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        login: login(builder)
    })
});

export default queries;
