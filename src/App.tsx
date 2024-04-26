import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css/';
import Layout from './pages/components/layout/Layout';
import PageCategory from './pages/Category/pageCategory';
import LayoutAccount from './pages/components/layoutAccount/LayoutAccount';
import Login from './pages/Account/Login';
import Home from './pages/Home/Index';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='home' />} />
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    <Route path='category' element={<PageCategory />} />
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
