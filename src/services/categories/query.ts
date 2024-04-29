import { api } from '../api';
import { categoriesGetByPage } from './queries/categoriesGetByPage';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        categoriesGetByPage: categoriesGetByPage(builder)
    })
});

export default queries;
