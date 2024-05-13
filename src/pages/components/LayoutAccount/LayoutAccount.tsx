import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './layoutAccount.scss';
import Cookies from 'js-cookie';

const authToken = Cookies.get('_cms_auth');

const LayoutAccount: FC = () => {
    if (authToken) {
        window.location.href = '/';
    }

    return (
        <>
            {authToken ? (
                <></>
            ) : (
                <div className='layout-account h-[100vh] flex justify-center items-center'>
                    <Outlet />
                </div>
            )}
        </>
    );
};

export default LayoutAccount;
