import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import "./Main.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div className='bg-img'>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Main;