import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import { BaseGetByPageResponse, BaseResponse } from '~/models/Base/BaseResponse';
import { CategoriesGetByPageRequest } from '~/models/Categories/CategoriesRequest';
import { CategoriesGetByPageResponse } from '~/models/Categories/CategoriesResponse';

const categoriesGetByPage = (
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {} & RetryOptions, FetchBaseQueryMeta>,
        never,
        'api'
    >
) =>
    builder.query<BaseGetByPageResponse<CategoriesGetByPageResponse>, CategoriesGetByPageRequest>({
        query: (arg: CategoriesGetByPageRequest) => ({
            url: '/category/get-by-page',
            method: 'POST',
            body: { ...arg }
        }),
        transformResponse: async (
            Response: BaseResponse<BaseGetByPageResponse<CategoriesGetByPageResponse>>
            //  meta: any, arg: CategoriesGetByPageRequest
        ) => Response.data as BaseGetByPageResponse<CategoriesGetByPageResponse>
    });

export { categoriesGetByPage };
