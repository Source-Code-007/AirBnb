import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const LayoutOne = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;