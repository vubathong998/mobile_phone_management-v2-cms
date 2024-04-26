import {
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
    fetchBaseQuery,
    retry
} from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { BaseQueryFn, QueryReturnValue } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RetryOptions } from 'node_modules/@reduxjs/toolkit/dist/query/retry';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

interface ExtendedHeaders extends Headers {
    ContentType?: string;
    Authorization?: string;
}

const staggeredBaseQuery = retry(
    fetchBaseQuery({
        baseUrl: process.env.API_URL,
        mode: 'cors',
        prepareHeaders: (
            headers: ExtendedHeaders
            // , { getState }
        ) => {
            const token = Cookies.get(process.env.AuthCookieName || '');
            headers.set('Authorization', `Bearer ${token}`);
            // headers.set('AcceptLanguage', Cookies.get(process.env.LANGUAGE || ''));
        }
    })
);

const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {} & RetryOptions,
    FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
    const result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> = await staggeredBaseQuery(
        args,
        api,
        extraOptions
    );
    console.log('check response ', { result });
    if (result?.error) {
        switch (result.error.status) {
            case 401:
                {
                    Cookies.remove('Authorization');

                    Swal.fire({
                        type: 'warning',
                        title: `Bạn chưa đăng nhập`,
                        text: 'Vui lòng đăng nhập lại!'
                    }).then(() => {
                        navigate('/login');
                    });
                }
                break;
            case 403:
                Swal.fire({
                    type: 'error',
                    title: `Không có quyền`,
                    text: 'Bạn không có quyền thực hiện tác vụ này!'
                });
                break;
            default:
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Đã có lỗi xảy ra!'
                });
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: [],
    endpoints: () => ({
        // getPokemonByName: builder.query<any, string>({
        //     query: (name) => `category/get-by-page`
        // })
    })
});
