import { api } from '../api';
import { categoriesCreate } from './queries/categoriesCreate';
import { categoriesGetByPage } from './queries/categoriesGetByPage';

const queries = api.injectEndpoints({
    endpoints: (builder) => ({
        categoriesGetByPage: categoriesGetByPage(builder),
        categoriesCreate: categoriesCreate(builder)
    })
});

export default queries;
