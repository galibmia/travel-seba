import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import "./Booking.css"


const Booking = () => {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        console.log(ranges.selection);
        setSelectionRange(ranges.selection);
    }

    const data = useLoaderData()

    return (
        <div className='flex flex-col justify-between md:flex-row items-center mt-36 max-w-screen-xl mx-5 gap-20 md:mx-auto'>
            <div className='w-1/2'>
                <h1 className='font-bold text-8xl bebas-neue-regular'>{data.name}</h1>
                <p className='w-11/12 mt-8 font-sans text-lg'>{data.description}</p>
                <Link to={`/search/${data.id}`}><button className='btn-color px-12 py-3 text-gray-900 rounded-sm text-center font-semibold mt-8 flex items-center gap-2'><span className='text-lg'>Start Search</span><FaArrowRight className='text-2xl' /></button></Link>
            </div>
            <div className=''>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    className='border-2 drop-shadow-md'
                />
            </div>
        </div>
    );
};

export default Booking;