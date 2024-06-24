import React from 'react';
import image from "../../assets/images/Rectangle26.png";
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const Hotel = ({ hotel }) => {
    const { name, room, rating } = hotel;

    return (
        <div className=''>
            <Link
                to="#"
                className="flex flex-col items-center bg-white border border-gray-300 rounded-lg md:flex-row md:max-w-xl"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ms-2"
                    src={image}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight montserrat-regular text-gray-900">
                        {name} ({room.type})
                    </h5>
                    <p className="mb-1 montserrat-normal font-normal text-gray-500">
                        {room.number_of_beds} beds, {room.number_of_baths} baths, {room.number_of_guests} guests
                    </p>
                    <p className='mb-1 montserrat-normal text-gray-500'>WiFi, Air conditioning, Kitchen</p>
                    <p className='mb-1 montserrat-normal text-gray-500'>Cancellation flexibility available</p>
                    <p className=''>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FaRegStar className="text-yellow-500" />}
                            placeholderSymbol={<FaStar className="text-yellow-500" />}
                            fullSymbol={<FaStar className="text-yellow-500" />}
                            readonly
                            className='me-2 block'
                        />
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Hotel;
