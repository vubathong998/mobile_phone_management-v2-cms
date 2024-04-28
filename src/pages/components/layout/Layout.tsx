import Cookies from 'js-cookie';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Partials/Sidebar';
import Header from './Partials/Header';

const authToken = Cookies.get('_cms_auth');

const Layout = () => {
    if (!authToken) {
        console.log('false token');
        window.location.href = '/login';
    }
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <>
            {authToken ? (
                <div className='flex h-screen overflow-hidden'>
                    {/* Sidebar */}
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* Content area */}
                    <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <Outlet />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Layout;
