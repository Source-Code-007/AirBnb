import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";

const MyModal = () => {
    const [filterRoomsAndBeds, setFilterRoomsAndBeds] = useState({ bedrooms: 'Any', beds: 'Any', bathrooms: 'Any' })
    const essensialData = ['Wifi', "Dedicated workspace", "Beach access", "Kitchen", "Wifi", "Fridge", "Free parking on premises", "Pool", "TV", "Air conditioning", "Car parking", "Food", "Sea View", "Washer", "Patio or balcony", "Smoking allowed"]
    const [showAllEssential, setShowAllEssential] = useState(false)
    const [checkedCheckboxes, setCheckedCheckboxes] = useState({});
    const [roomType, setRoomType] = useState('Any type');

    // clear all func
    const clearAllFunc = () => {
        setShowAllEssential(false)
        setFilterRoomsAndBeds({ bedrooms: 'Any', beds: 'Any', bathrooms: 'Any' })
        setCheckedCheckboxes({})
    }

    return (
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box !p-0 w-5/6 sm:w-4/6 lg:w-3/6 max-w-none relative modal-scrollbar">

                <h2 className='border-b border-slate-300 font-bold text-lg text-center py-4'>Filters</h2>
                <div className='px-5 pt-3 pb-8 space-y-4'>
                    {/* top title */}
                    <div className='space-y-1 my-2'>
                        <h3 className="font-bold text-lg">Type of place</h3>
                        <p>earch rooms, entire homes, or any type of place.</p>
                    </div>
                    {/* type */}
                    <div className="join my-3 flex justify-center">
                        <button className={`my-btn-one join-item ${roomType === 'Any type'? '!bg-black !text-white' : '!bg-gray-100 !text-slate-800'}`} type='button' onClick={()=> setRoomType('Any type')}>Any Type</button>
                        <button className={`my-btn-one join-item ${roomType === 'room' ? '!bg-black !text-white' : '!bg-gray-100 !text-slate-800'}`} type='button' onClick={()=> setRoomType('room')}>Room</button>
                        <button className={`my-btn-one join-item ${roomType === 'entire home' ? '!bg-black !text-white' : '!bg-gray-100 !text-slate-800'}`} type='button' onClick={()=> setRoomType('entire home')}>Entire Home</button>
                    </div>

                    {/* price range */}
                    <div>
                        <div className='space-y-1 my-2'>
                            <h3 className="font-bold text-lg">Price range</h3>
                            <p>Nightly prices before fees and taxes</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='relative w-full'>
                                <input type="text" defaultValue={20} className='border-[1px] border-slate-400 rounded focus:border-slate-800 outline-none pt-6 pl-5 pr-4 w-full font-semibold' />
                                <span className='absolute left-2 top-1'>Minimum</span>
                                <span className='absolute left-2 bottom-px font-semibold'>$</span>
                            </div>
                            <div className='relative w-full'>
                                <input type="text" defaultValue={3000} className='border-[1px] border-slate-400 rounded focus:border-slate-800 outline-none pt-6 pl-5 pr-4 w-full font-semibold' />
                                <span className='absolute left-2 top-1'>Maximum</span>
                                <span className='absolute left-2 bottom-px font-semibold'>$</span>
                            </div>
                        </div>
                    </div>

                    {/* Rooms and beds */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 mt-6">Rooms and beds</h3>
                        <div className='space-y-4'>
                            <div>
                                <p className='font-semibold'>Bedrooms</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded font-semibold flex-1 capitalize ${filterRoomsAndBeds.bedrooms === elem ? 'bg-black text-white' : 'bg-gray-100 text-black'}`} type='button' onClick={() => setFilterRoomsAndBeds({ ...filterRoomsAndBeds, bedrooms: elem })}>{elem}</button>
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Beds</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded flex-1 capitalize font-semibold ${filterRoomsAndBeds.beds === elem ? 'bg-black text-white' : 'bg-gray-100 text-black'}`} onClick={() => setFilterRoomsAndBeds({ ...filterRoomsAndBeds, beds: elem })} type='button'>{elem}</button>
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Bathrooms</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded font-semibold flex-1 capitalize ${filterRoomsAndBeds.bathrooms === elem ? 'bg-black text-white' : 'bg-gray-100 text-black'}`} type='button' onClick={() => setFilterRoomsAndBeds({ ...filterRoomsAndBeds, bathrooms: elem })}>{elem}</button>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* facilities */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 mt-6">Facilites</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {
                                essensialData.slice(0, showAllEssential ? essensialData.length : 4).map((elem, ind) => {
                                    return <div key={ind} className="form-control">
                                        <label className="cursor-pointer label justify-normal gap-2">
                                            <input type="checkbox" name='facilities' 
                                            value={elem} 
                                            checked={checkedCheckboxes[elem] || false}
                                            onChange={() => setCheckedCheckboxes((prevCheckedCheckboxes) => ({
                                                ...prevCheckedCheckboxes,
                                                [elem]: !prevCheckedCheckboxes[elem]
                                            }))} className="checkbox" />
                                            <span className="label-text">{elem}</span>
                                        </label>
                                    </div>
                                })
                            }
                        </div>
                        {!showAllEssential && (
                            <button className='my-btn-one mt-2' onClick={() => setShowAllEssential(true)}>View More</button>
                        )}
                    </div>

                </div>

                <div className='sticky bottom-0 left-0 right-0 border-t'>
                    <div className='flex justify-between py-5 px-3 bg-slate-100'>
                        <span className='flex items-center gap-1 font-bold cursor-pointer underline' onClick={clearAllFunc}> Clear all</span>
                        <button className='my-btn-one'>Show Places</button>
                    </div>
                </div>

                <div className="modal-action mt-0">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" absolute left-3 top-5 text-xl"><FaXmark></FaXmark></button>
                </div>
            </form>
        </dialog>
    );
};

export default MyModal;