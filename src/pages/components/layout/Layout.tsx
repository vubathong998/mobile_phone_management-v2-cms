import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';

const authToken = Cookies.get('_cms_auth');

const Layout = () => {
    if (!authToken) {
        console.log('false token');
        window.location.href = '/login';
    }

    return (
        <>
            {authToken ? (
                <>
                    <h1>layout</h1>
                    <Outlet />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Layout;
