import React from 'react';
import { FaStar } from 'react-icons/fa';

const Cards = ({ myData }) => {
    const { title, countryName, facilities, images, property, ratings, rent, reviews } = myData
    console.log(myData);
    return (
        <div className='rounded-lg shadow-lg shadow-gray-400'>
            <figure>
                <img src={images[0]} alt="" className='rounded-t-lg h-64 w-full' />
            </figure>
            <div className='p-3 space-y-3'>
                <div className='flex gap-3 justify-between'>
                    <div className='space-y-2 overflow-hidden'>
                        <h2 className='font-semibold text-ellipsis whitespace-nowrap overflow-hidden'>{title}</h2>
                    </div>
                    <span className='text-slate-900 flex items-center gap-2'><FaStar></FaStar>{ratings}</span>
                </div>
                <p className='font-semibold'>{countryName}</p>

                <p className='font-bold text-slate-900'>${rent} <span className='text-slate-700 font-semibold'>night</span></p>
            </div>
        </div>
    );
};

export default Cards;