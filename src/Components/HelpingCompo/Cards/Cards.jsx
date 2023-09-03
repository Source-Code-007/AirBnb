/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({ myData }) => {
    const { _id, title, countryName, facilities, images, property, ratings, rent, reviews } = myData
    const navigate = useNavigate()
    return (
        <div className='rounded-lg shadow-lg shadow-gray-400 cursor-pointer'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    images.map((image, ind) => {
                        return <SwiperSlide key={ind}>
                            <img src={image} alt="" className='rounded-t-lg h-64 w-full' />
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div className='p-3 space-y-3'>
                <div className='flex gap-3 justify-between'>
                    <div className='space-y-2 overflow-hidden'>
                        <h2 className='font-semibold text-ellipsis whitespace-nowrap overflow-hidden'>{title}</h2>
                    </div>
                    <span className='text-slate-900 flex items-center gap-2'><FaStar></FaStar>{ratings}</span>
                </div>
                <p className='font-semibold'>{countryName}</p>

                <div className='flex justify-between items-center'>
                    <p className='font-bold text-slate-900'>${rent} <span className='text-slate-700 font-semibold'>night</span></p>
                    <Link to={`/rooms/${_id}`}><button className='border-2 hover:scale-105 transition border-[#a754f6] px-6 py-2 font-bold text-[#a754f6] rounded'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;