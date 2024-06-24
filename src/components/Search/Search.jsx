import { useLoaderData } from 'react-router-dom';
import React from 'react';
import Hotel from '../Hotel/Hotel';

const Search = () => {
    const hotelData = useLoaderData();
    console.log(hotelData.length)
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <h1 className='text-4xl font-semibold' >Search Hotel in {hotelData[0].location}</h1>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                {
                    hotelData.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>

        </div>
    );
};

export default Search;