import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import { LoginRequest } from '~/models/Account/AccountRequest';
import { LoginResponse } from '~/models/Account/AccountResponse';
import { BaseResponse } from '~/models/Base/BaseResponse';

const login = (
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {} & RetryOptions, FetchBaseQueryMeta>,
        never,
        'api'
    >
) =>
    builder.mutation<LoginResponse, LoginRequest>({
        query: (arg: LoginRequest) => ({
            url: '/account/login',
            method: 'POST',
            body: { ...arg }
        }),
        transformResponse: async (
            Response: BaseResponse<LoginResponse>
            //  meta: any, arg: LoginRequest
        ) => Response.data as LoginResponse
    });

export { login };
