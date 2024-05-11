import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import { BaseResponse } from '~/models/Base/BaseResponse';
import { CategoriesCreateRequest } from '~/models/Categories/CategoriesRequest';
import { CategoriesCreateResponse } from '~/models/Categories/CategoriesResponse';

const categoriesCreate = (
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {} & RetryOptions, FetchBaseQueryMeta>,
        never,
        'api'
    >
) =>
    builder.mutation<CategoriesCreateResponse, CategoriesCreateRequest>({
        query: (arg: CategoriesCreateRequest) => ({
            url: '/category/create',
            method: 'POST',
            body: { ...arg }
        }),
        transformResponse: async (
            Response: BaseResponse<CategoriesCreateResponse>
            //  meta: any, arg: CategoriesCreateRequest
        ) => Response.data as CategoriesCreateResponse
    });

export { categoriesCreate };
