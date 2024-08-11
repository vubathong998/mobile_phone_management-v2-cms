import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import { BaseResponse } from '~/models/Base/BaseResponse';
import { PhonesCreateResponse } from '~/models/Phones/PhoneResponse';
import { PhonesCreateRequest } from '~/models/Phones/PhonesRequest';

const phonesCreate = (
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {} & RetryOptions, FetchBaseQueryMeta>,
        never,
        'api'
    >
) =>
    builder.mutation<PhonesCreateResponse, PhonesCreateRequest>({
        query: (arg: PhonesCreateRequest) => ({
            url: '/phone/create',
            method: 'POST',
            body: { ...arg }
        }),
        transformResponse: async (
            Response: BaseResponse<PhonesCreateResponse>
            //  meta: any, arg: PhonesCreateRequest
        ) => Response.data as PhonesCreateResponse
    });

export { phonesCreate };
