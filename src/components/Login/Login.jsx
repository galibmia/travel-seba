import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { loginWithGoogle, loginWithEmail, logOut, toastError, toastSuccess,} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
        .then(res => {
            toastSuccess('Login Successfully')
            navigate('/')
        })

    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(res => {
                toastSuccess('Login Successfully');
                navigate('/')
            })
    }


    return (
        <div>
            <form className="w-full md:w-1/3 mx-auto mt-24 border border-gray-300 rounded-sm p-4 md:px-14 md:py-14" onSubmit={handleLogin}>
                <h1 className='montserrat-bold'>Login</h1>
                <div className="my-5">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full  py-2.5 montserrat-regular"
                        placeholder="Username or Email"
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
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-gray-900 btn-color focus:outline-none font-medium rounded-lg w-4/5  md:w-full sm:mx-auto px-5 py-2.5 text-center montserrat-regular "
                >
                    Login
                </button>
                <p className='text-center mt-3'>New here? <Link to='/register' className='text-yellow-500 hover:text-yellow-500'>Create an account</Link></p>
            </form>
            <div className='w-full md:w-1/3 mx-auto mt-5'>
                <p className='flex items-center justify-center gap-2 w-4/5 mx-auto'><hr className='border border-gray-400 w-52' /> <span className='montserrat-regular'>Or </span><hr className='border border-gray-400 w-52' /></p>
                <button className='w-4/5 mx-auto mt-6 p-2 border border-gray-400 hover:border-gray-700 rounded-3xl flex items-center gap-24'><FaGithub className='text-black text-5xl'></FaGithub> <span className='montserrat-regular text-gray-950 hover:text-gray-900'>Continue with Github</span></button>
                <button onClick={handleLoginWithGoogle} className='w-4/5 mx-auto mt-6 p-2 border border-gray-400 hover:border-gray-700 rounded-3xl flex items-center gap-24'><FcGoogle className='text-blue-600 text-5xl'></FcGoogle> <span className='montserrat-regular text-gray-950'>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default Login;