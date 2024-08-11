import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import { BaseGetByPageResponse, BaseResponse } from '~/models/Base/BaseResponse';
import { PhonesGetByPageResponse } from '~/models/Phones/PhoneResponse';
import { PhonesGetByPageRequest } from '~/models/Phones/PhonesRequest';

const phonesGetByPage = (
    builder: EndpointBuilder<
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {} & RetryOptions, FetchBaseQueryMeta>,
        never,
        'api'
    >
) =>
    builder.query<BaseGetByPageResponse<PhonesGetByPageResponse>, PhonesGetByPageRequest>({
        query: (arg: PhonesGetByPageRequest) => ({
            url: '/phone/get-by-page',
            method: 'POST',
            body: { ...arg }
        }),
        transformResponse: async (
            Response: BaseResponse<BaseGetByPageResponse<PhonesGetByPageResponse>>
            //  meta: any, arg: PhonesGetByPageRequest
        ) => Response.data as BaseGetByPageResponse<PhonesGetByPageResponse>
    });

export { phonesGetByPage };
