import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import sundarban from "../../assets/images/sundorbon.png";
import bandarban from "../../assets/images/Sajek.png";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";



const Home = () => {

    const data = useLoaderData()
    console.log(data);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='flex flex-col justify-between md:flex-row  mt-36 max-w-screen-xl mx-5 gap-10 md:mx-auto'>
            <div className='w-1/2'>
                <h1 className='font-bold text-8xl bebas-neue-regular'>{data.name}</h1>
                <p className='w-11/12 mt-8 font-sans text-lg'>{data.description}</p>
                <Link to={`/booking/${data.id}`}><button className='btn-color px-12 py-3 text-gray-900 rounded-sm text-center font-semibold mt-8 flex items-center gap-2'><span className='text-lg'>Booking</span><FaArrowRight  className='text-2xl'/></button></Link>
            </div>
            <div className='w-1/2'>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={200}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType=''
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <Link to={'/location/1'}><div className='cox-bazar'>
                        <h1 className='text-4xl bebas-neue-regular text-gray-900 ms-6 mt-28'>Cox's Bazar</h1>
                    </div></Link>
                    <Link to={'/location/2'}>
                        <div className='sreemangal'>
                            <h1 className='text-4xl bebas-neue-regular text-gray-900 ms-6 mt-28'>Sreemongol</h1>
                        </div></Link>
                    <Link to={'/location/3'}><div className='sundarban'>
                        <h1 className='text-4xl bebas-neue-regular text-white ms-6 mt-28'>Sundarban</h1>
                    </div></Link>
                    <Link to={'/location/4'}>
                        <div className='bandarban'>
                            <h1 className='text-4xl bebas-neue-regular text-white ms-6 mt-28 drop-shadow-lg'>Bandarban</h1>
                        </div>
                    </Link>
                    <Link to={'/location/5'}>
                        <div className='sylhet'>
                            <div className='test'>
                                <h1 className='text-4xl bebas-neue-regular text-white ms-5 md:ms-12 pt-28 drop-shadow-lg'>Sylhet</h1>
                            </div>
                        </div>
                    </Link>

                </Carousel>;
            </div>
        </div>
    );
};

export default Home;