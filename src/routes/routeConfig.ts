import { RouteItemInterface } from './routeType';
import PageCategory from '~/pages/Category/PageCategory';
import PagePhone from '~/pages/Phone/index';

type RouteInterface = Array<RouteItemInterface>;

export const paths = {
    category: '/category',
    phone: '/phone'
};

export const routes: RouteInterface = [
    {
        name: 'Category',
        path: paths.category,
        subRoutes: [],
        exact: true,
        component: PageCategory
    },
    {
        name: 'Phone',
        path: paths.phone,
        subRoutes: [],
        exact: true,
        component: PagePhone
    }
];
