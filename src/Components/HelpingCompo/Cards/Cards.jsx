import React from 'react';
import { FaStar } from 'react-icons/fa';

const Cards = ({ myData }) => {
    const { title, countryName, facilities, images, property, ratings, rent, reviews } = myData
    console.log(myData);
    return (
        <div className=' p-3 border-2 border-green-500 rounded-lg'>
            <div className='flex gap-3 justify-between'>
                <div className='space-y-2 overflow-hidden'>
                    <h2 className='font-semibold text-ellipsis whitespace-nowrap overflow-hidden'>{title}</h2>
                </div>
                <span className='text-slate-900 flex items-center gap-2'><FaStar></FaStar>{ratings}</span>
            </div>
            <p className='font-semibold'>{countryName}</p>

            <p className='font-bold text-slate-900'>${rent} <span className='text-slate-700 font-semibold'>night</span></p>
        </div>
    );
};

export default Cards;