import React from 'react';
import image from "../../assets/images/Rectangle26.png"
import { Link } from 'react-router-dom';

const Hotel = ({ hotel }) => {

    const {name, } = hotel;

    return (
        <div className=''>
            <Link
                to="#"
                className="flex flex-col items-center bg-white border border-gray-300 rounded-lg hover:shadow-md md:flex-row md:max-w-xl"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ms-2"
                    src={image}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                       {name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Hotel;