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
// import dotenv from 'dotenv';
// dotenv.config();

interface ExtendedHeaders extends Headers {
    ContentType?: string;
    Authorization?: string;
}
// console.log(process.env.AuthCookieName);

const staggeredBaseQuery = retry(
    fetchBaseQuery({
        // baseUrl: process.env.API_URL,
        baseUrl: 'http://localhost:6001/api',
        mode: 'cors',
        prepareHeaders: (
            headers: ExtendedHeaders
            // , { getState }
        ) => {
            // const token = Cookies.get(process.env.AuthCookieName || '');
            const token = Cookies.get('_cms_auth');
            headers.set('Authorization', `Bearer ${token}`);
            // headers.set('AcceptLanguage', Cookies.get(process.env.LANGUAGE || ''));
        }
    }),
    { maxRetries: 0 }
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
    // const navigate = useNavigate();
    if (result?.error) {
        switch (result.error.status) {
            case 401:
                {
                    console.log({ result });
                    Cookies.remove('_cms_auth');

                    Swal.fire({
                        type: 'warning',
                        title: `Bạn chưa đăng nhập`,
                        text: 'Vui lòng đăng nhập lại!'
                    }).then(() => {
                        window.location.href = '/login';
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
