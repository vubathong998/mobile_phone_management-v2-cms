import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css/';
import Layout from './pages/components/Layout/Layout';
import LayoutAccount from './pages/components/LayoutAccount/LayoutAccount';
import Login from './pages/Account/Login';
import Home from './pages/Home/Index';
import { routes } from './routes/routeConfig';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='home' />} />
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    {routes.map((route) => {
                        const Component = route.component as React.FunctionComponent<any>;
                        return <Route path={route.path} element={<Component />} key={route.path} />;
                    })}
                </Route>
                <Route path='/' element={<LayoutAccount />}>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Login />}></Route>
                </Route>
                <Route path='*' element={<>404 page not found</>} />
            </Routes>
        </>
    );
}

export default App;
