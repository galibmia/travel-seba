import React, { useContext } from 'react';
import logo from "../../assets/images/icons/travel-logo.png";
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {
    const { user, logOut, toastSuccess, toastError, loading } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toastSuccess("Log out Successfully");
            })
            .catch(err => {
                toastError(err.message)
            })
    }
    console.log(loading)
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-16" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <ActiveLink to="/" className="block py-2 px-3 rounded md:border-0 md:p-0 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/booking" className="block py-2 px-3 rounded md:border-0 md:p-0 hover:bg-gray-700 hover:text-white hover:bg-transparent">Booking</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/search" className="block py-2 px-3 rounded border-0 p-0  hover:bg-gray-700 hover:text-white hover:bg-transparent">Search Hotel</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/pricing" className="block py-2 px-3  rounded border-0 p-0 text-white  hover:bg-gray-700 hover:text-white hover:bg-transparent">Contact</ActiveLink>
                        </li>
                        {
                            user ? <li><span className='text-white me-5'>{user?.displayName}</span><button onClick={handleLogOut} className='btn-color px-6 py-2 text-gray-900 rounded-sm'>Log Out</button> </li> : <><Link to='/login'><button className='btn-color px-6 py-2 text-gray-900 rounded-sm'>Login</button></Link><Link to='/register'><button className='btn-color px-6 py-2 text-gray-900 rounded-sm'>Register</button></Link></>

                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;