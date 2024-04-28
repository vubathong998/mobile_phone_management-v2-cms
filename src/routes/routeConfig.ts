import PageCategory from '~/pages/Category/pageCategory';
import { RouteItemInterface } from './routeType';

type RouteInterface = Array<RouteItemInterface>;

export const paths = {
    category: '/category'
};

export const routes: RouteInterface = [
    {
        name: 'Category',
        path: paths.category,
        subRoutes: [],
        exact: true,
        component: PageCategory
    }
];
