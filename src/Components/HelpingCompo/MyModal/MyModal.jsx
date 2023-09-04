import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";

const MyModal = () => {
    const [filterRoomsAndBeds, setFilterRoomsAndBeds] = useState({bedrooms:'Any', beds:'Any', bathrooms:'Any' })

    return (
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box !p-0 max-w-[800px] relative">

                <h2 className='border-b border-slate-300 font-bold text-lg text-center py-3'>Filters</h2>
                <div className='px-5 py-3'>
                    <div className='space-y-1 my-2'>
                        <h3 className="font-bold text-lg">Type of place</h3>
                        <p>earch rooms, entire homes, or any type of place.</p>
                    </div>
                    <div className="join my-3 flex justify-center">
                        <button className="btn join-item bg-black text-white" type='button'>Any Type</button>
                        <button className="btn join-item" type='button'>Room</button>
                        <button className="btn join-item" type='button'>Entire Home</button>
                    </div>

                    <div className='space-y-1 my-2'>
                        <h3 className="font-bold text-lg">Price range</h3>
                        <p>Nightly prices before fees and taxes</p>
                    </div>

                    {/* <div>
                    <div className='relative'>
                    <input type="text" defaultValue={1000} className='border border-slate-400 focus:border-slate-800 pt-10 px-6' />
                        <span className='absolute left-1 top-1'>Minimum</span>
                    </div>
                    <input type="text" defaultValue={1000} />
                </div> */}

                    <div>
                        <h3 className="font-bold text-lg mb-4 mt-6">Rooms and beds</h3>
                        <div className='space-y-5'>
                            <div>
                                <p className='font-semibold'>Bedrooms</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded hover:none flex-1 capitalize ${filterRoomsAndBeds.bedrooms === elem ? 'bg-black text-white' : 'bg-gray-100 text-black'}`} type='button' onClick={()=> setFilterRoomsAndBeds({...filterRoomsAndBeds, bedrooms: elem})}>{elem}</button>
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Beds</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded flex-1 capitalize hover:none ${filterRoomsAndBeds.beds === elem ? 'bg-black text-white' : 'bg-gray-100 text-black'}`} onClick={()=> setFilterRoomsAndBeds({...filterRoomsAndBeds, beds: elem})} type='button'>{elem}</button>
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Bathrooms</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {['Any', '1', '2', '3', '4', '5', '6', '7', '8+'].map((elem, ind) => {
                                        return <button key={ind} className={`px-4 py-3 rounded  flex-1 capitalize ${filterRoomsAndBeds.bathrooms === elem? 'bg-black text-white' : 'bg-gray-100 text-black'}`} type='button' onClick={()=> setFilterRoomsAndBeds({...filterRoomsAndBeds, bathrooms: elem})}>{elem}</button>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" absolute left-3 top-4 text-xl"><FaXmark></FaXmark></button>
                </div>
            </form>
        </dialog>
    );
};

export default MyModal;