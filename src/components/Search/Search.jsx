import { useLoaderData, useLocation } from 'react-router-dom';
import React from 'react';
import Hotel from '../Hotel/Hotel';


const Search = () => {
    const hotelData = useLoaderData();
    const location = useLocation();
    console.log(location.pathname)
    let locationName = hotelData[0].location;
    if(location.pathname === '/search'){
        locationName = 'Bangladesh';
    }
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <h1 className='text-4xl font-semibold' >Search Hotel in {locationName}</h1>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                {
                    hotelData.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>

        </div>
    );
};

export default Search;