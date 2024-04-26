// import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const authToken = Cookies.get('Authorization');

const Layout = () => {
    // const navigate = useNavigate();
    // if (!authToken) {
    //     console.log('false token');
    //     // navigate('/login/abcd');
    // }
    // console.log({ authToken });

    return (
        <>
            <>
                <h1>layout</h1>
                <Outlet />
            </>
            {/* {authToken ? (
            ) : (
                <></>
            )} */}
        </>
    );
};

export default Layout;
