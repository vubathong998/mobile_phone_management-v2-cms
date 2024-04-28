import Cookies from 'js-cookie';
// import Swal from 'sweetalert2';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginFormDateInterface } from '~/models/Account/AccountInterface';
import { BaseReduxRTKResponse, BaseResponse } from '~/models/Base/BaseResponse';
import { useLoginMutation } from '~/services/account';

const Login = () => {
    const navigate = useNavigate();

    /* #region queries */
    const [login, loginState] = useLoginMutation();
    const [loginErr, setLoginErr] = useState<string>('');

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<LoginFormDateInterface>({
        defaultValues: {
            password: '',
            username: ''
        }
    });
    /* #endregion */

    /* #region functions */
    const onSubmit = (data: LoginFormDateInterface) => {
        login({ password: data.password, username: data.username })
            .unwrap()
            .then((response) => {
                if (response.token) {
                    setLoginErr('');
                    Cookies.set('_cms_auth', response.token);
                    navigate('/');
                } else {
                    setLoginErr('Đã có lỗi xảy ra vui lòng thử lại sau');
                    Cookies.set('_cms_auth', '');
                }
            })
            .catch((err: BaseReduxRTKResponse<BaseResponse>) => {
                if (err.status === 404) {
                    setLoginErr('Tài khoản hoặc mật khẩu không đúng!');
                }
            });
    };
    /* #endregion */

    return (
        <section className='bg-transparent dark:bg-gray-900 w-[500px]'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                        Đăng nhập
                    </h1>
                    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Tài khoản
                            </label>
                            <input
                                // type='email'
                                // name='username'
                                // id='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='username123'
                                // required=""
                                {...register('username', {
                                    required: {
                                        message: 'Không được bỏ trống username',
                                        value: true
                                    }
                                    // pattern: {
                                    //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    //     message: 'Bạn phải nhập email'
                                    // }
                                })}
                            />
                            {errors.username && <p className='text-sm text-red-500'>{errors.username.message}</p>}
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Mật khẩu
                            </label>
                            <input
                                type='password'
                                // name='password'
                                // id='password'
                                placeholder='••••••••'
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                // required=""
                                {...register('password', {
                                    required: {
                                        message: 'Không được bỏ trống password',
                                        value: true
                                    }
                                    // minLength: {
                                    //     message: 'Mật khẩu phải chứa tổi thiểu 6 ký tự',
                                    //     value: 6
                                    // }
                                })}
                            />
                            {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                        </div>
                        {/* <div className='flex items-center justify-between'>
                            <div className='flex items-start'>
                                <div className='flex items-center h-5'>
                                    <input
                                        id='remember'
                                        aria-describedby='remember'
                                        type='checkbox'
                                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                                        // required=""
                                    />
                                </div>
                                <div className='ml-3 text-sm'>
                                    <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>
                                        Nhớ tài khoản
                                    </label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Forgot password?
                            </a>
                        </div> */}
                        <div className='text-red-500 text-sm'>{loginErr}</div>
                        <button
                            type={loginState.isLoading ? 'button' : 'submit'}
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     // Swal.fire({
                            //     //     type: 'error',
                            //     //     title: `Không có quyền`,
                            //     //     text: 'Bạn không có quyền thực hiện tác vụ này!'
                            //     // }).then((result) => {});
                            //     navigate('/home');
                            // }}
                            className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800${loginState.isLoading && ' opacity-50 cursor-not-allowed'}`}
                        >
                            Đăng nhập
                        </button>
                        <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                            Bạn không có tài khoản?{' '}
                            <a href='#' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                Đăng ký tại đây
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
