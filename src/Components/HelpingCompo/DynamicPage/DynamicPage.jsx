import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import MyLoading from '../MyLoading';
import { FaAcquisitionsIncorporated, FaCheck, FaHeart, FaIoxhost, FaKey, FaShare, FaStar } from 'react-icons/fa';

const DynamicPage = () => {
    const { id } = useParams()
    const { isLoading: singleDataLoading, data: singleData } = useQuery('singleData', async () => {
        const res = await fetch(`https://airbnb-server-pi.vercel.app/singleData/${id}`)
        const result = res.json()
        return result
    })

    // console.log(singleData);

    if (singleDataLoading) {
        return <div className="h-[96vh] flex items-center justify-center">
            <MyLoading></MyLoading>
        </div>
    }

    const { _id, title, countryName, facilities, roomType, images, property, ratings, rent, reviews } = singleData

    return (
        <div className='myDynamicPageContainer py-7 space-y-5'>

            {/* top title */}
            <div>
                <h2 className='font-bold text-xl xl:text-3xl text-ellipsis whitespace-nowrap overflow-hidden'>{title}</h2>
                <div className='flex justify-between'>

                    <div className='flex gap-4 items-center'>
                        <span className='text-slate-900 flex items-center gap-2'><FaStar></FaStar>{ratings}</span>
                        <span className='underline font-semibold cursor-pointer'>{reviews} reviews</span>
                        <span className='font-semibold cursor-pointer text-lg underline'>{countryName}</span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='flex items-center gap-2 underline cursor-pointer'> <FaShare></FaShare> Share</span>
                        <span className='flex items-center gap-2 underline cursor-pointer'> <FaHeart></FaHeart> Save</span>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className='h-96 flex gap-6 my-6'>
                <div className="w-1/2 h-full ">
                    <img src={images?.[0]} alt="" className='w-full h-full rounded-l-2xl' />
                </div>
                <div className="w-1/2 h-full flex gap-3">
                    <img src={images?.[1]} alt="" className='w-1/2' />
                    <img src={images?.[2]} alt="" className='rounded-r-2xl w-1/2' />
                </div>
            </div>

            <div className='grid grid-cols-12 gap-10'>

                <div className='col-span-12 md:col-span-8 space-y-5'>
                    {/* rest props */}
                    <div className='space-y-2'>
                        <h2 className='font-bold text-2xl capitalize'>{roomType}</h2>
                        <div className='flex gap-3 font-semibold'>
                            <span>{property.guests}+ guests</span>
                            <span>{property.bedrooms} bedrooms</span>
                            <span>{property.beds}+ beds</span>
                            <span>{property.bathrooms} bathrooms</span>
                        </div>
                    </div>

                    {/* checkin info */}
                    <div className='space-y-4 font-semibold text-2xl py-6 mr-10 md:mr-36 border-y border-slate-300'>
                        <div className='flex gap-3 items-center'>
                            <span><FaCheck></FaCheck></span>
                            <div>
                                <h2 className=''>Self check-in</h2>
                                <p className='font-normal text-lg'>Check yourself in with the smartlock.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span><FaKey></FaKey></span>
                            <div>
                                <h2 className=''>Great check-in experience</h2>
                                <p className='font-normal text-lg'>100% of recent guests gave the check-in process a 5-star rating.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span>
                                <FaIoxhost></FaIoxhost>
                            </span>
                            <div>
                                <h2 className=''>Experienced host</h2>
                                <p className='font-normal text-lg'>Element Vacation Homes has <span className='font-bold text-[#a754f6]'>{reviews}</span> reviews for other places.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-span-12 md:col-span-4 rounded border border-slate-300 p-5 space-y-4'>
                    <div className='flex justify-between'>
                        <span className='font-bold text-lg'>${rent} night</span>
                        <div className='flex gap-2 items-center'>
                            <span className='text-slate-900 flex items-center gap-2'><FaStar></FaStar>{ratings}</span>
                            <span className='underline font-semibold cursor-pointer'>{reviews} reviews</span>
                        </div>
                    </div>

                    {/* facilities */}
                    <div>
                        <h2 className='font-bold text-lg'>Facilities</h2>
                        <div className='grid grid-cols-2 gap-2'>
                            {
                                facilities.map((facility, ind) => {
                                    return <span key={ind} className='font-semibold'>{facility}</span>
                                })
                            }

                        </div>
                    </div>


                    <select className="select select-error w-full">
                        <option disabled>Guests</option>
                        <option>1 Guests</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                    </select>


                    <button className='bg-[#a754f6] px-16 py-3 font-bold text-slate-50 rounded'>Check Availability</button>

                </div>

            </div>


        </div>
    );
};

export default DynamicPage;