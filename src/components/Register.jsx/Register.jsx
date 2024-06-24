import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const navigate = useNavigate();
    const { loading, createUser, updateProfile, toastError } = useContext(AuthContext);
    console.log(loading)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            toastError("Password must be 6 or more");
            return;
        }
        else if (password !== confirmPassword) {
            toastError("Password didn't match");
            return
        }

        createUser(email, password)
        .then(res => {
            updateProfile(name)
            .then()
            .catch(err => {
                toastError(err.message)
            })
            navigate('/')
        })
        .catch(err => {
            toastError(err.message)
        })


        toast.success("Account created successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }


    return (
        <form className="w-full md:w-1/3 mx-auto mt-24 border border-gray-300 rounded-sm p-4 md:px-14 md:py-14" onSubmit={handleSubmit}>
            <h1 className='montserrat-bold'>Create an account</h1>
            <div className="my-5">
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full  py-2.5 montserrat-regular"
                    placeholder="Full Name"
                    required
                />
            </div>
            <div className="my-5">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full  py-2.5 montserrat-regular"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="my-5">
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full py-2.5 montserrat-regular"
                    placeholder="Password"
                    required
                />
            </div>
            <div className="my-5">
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full py-2.5 montserrat-regular"
                    placeholder="Confirm Password"
                    required
                />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900"
                >
                    Accept <Link to="/terms" className='text-blue-700'>Terms and Conditions</Link>
                </label>
            </div>
            <button
                type="submit"
                className="text-gray-900 btn-color focus:outline-none font-medium rounded-lg w-4/5  md:w-full sm:mx-auto px-5 py-2.5 text-center montserrat-regular "
            >
                Create an account
            </button>
            <p className='text-center mt-3'>Already have an account? <Link to='/login' className='text-yellow-500 hover:text-yellow-500'>Login</Link></p>
        </form>
    );
};

export default Register;