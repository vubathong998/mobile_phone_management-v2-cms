/// <reference types="react" />

import { ComponentType, FunctionComponent } from 'react';

export type RouteItemInterface<T = any> = {
    name: string;
    path: string;
    subRoutes?: Array<RouteItemInterface<T>>;
    header?: Array<HeaderInterface>;
    exact?: boolean;
    component?: FunctionComponent<T> | ComponentType<T>;
    isPrivate?: boolean;
};
export type HeaderInterface = {
    name: string;
    path: string;
};
