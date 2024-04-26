import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './layoutAccount.scss';

const LayoutAccount: FC = () => {
    return (
        <div className='layout-account h-[100vh] flex justify-center items-center'>
            <Outlet />
        </div>
    );
};

export default LayoutAccount;
