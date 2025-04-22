import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import CountUp from 'react-countup';
import totalDoctors from '../../assets/success-doctor.png'
import totalReviews from '../../assets/success-review.png'
import totalPatinents from '../../assets/success-patients.png'
import totalStuffs from '../../assets/success-staffs.png'

const DoctorsContainer = ({ doctors }) => {
    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayDoctors(doctors);
        } else {
            setDisplayDoctors(doctors.slice(0, 6))
        }
    }, [doctors, showAll])
    return (
        <div className='py-10 lg:py-20'>
            <h1 className=' text-2xl lg:text-4xl font-bold text-center mb-3'>Our Doctors</h1>
            <p className='text-gray-600 font-semibold text-center w-7/10 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='lg:w-10/12 mx-auto mt-10 '>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10'>
                    {
                        displayDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                    }

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <button onClick={() => {
                        setShowAll(!showAll)
                        if (showAll) window.scrollTo(0, 400)
                    }} className=' text-white bg-indigo-600 rounded-3xl px-5 py-2 hover:bg-indigo-800 transition-all cursor-pointer mt-8'>{showAll ? 'Show Less' : "Show All"}</button>
                </div>

            </div>

            <div className='w-full lg:w-10/12 mx-auto mt-5 lg:mt-10 space-y-5 lg:space-y-10'>
                <div className='space-y-2'>
                    <h1 className='text-xl lg:text-3xl font-bold text-center'>We Provide Best Medical Services</h1>
                    <p className='text-center text-sm lg:text-lg font-semibold text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6'>
                    <div className='bg-white rounded-2xl p-5 space-y-2'>
                        <img src={totalDoctors} alt="" className='max-w-16' />
                        <p className='text-lg lg:text-2xl font-bold'>
                            <CountUp end={199} duration={2.75} /> +
                        </p>

                        <h2 className='text-gray-500 font-bold text-lg lg:text-xl'>Total Doctors</h2>
                    </div>

                    <div className='bg-white rounded-2xl p-5 space-y-2'>
                        <img src={totalReviews} alt="" className='max-w-16' />
                        <p className='text-lg lg:text-2xl font-bold'>
                            <CountUp end={467} duration={3.75} /> +
                        </p>

                        <h2 className='text-gray-500 font-bold text-lg lg:text-xl'>Total Doctors</h2>
                    </div>

                    <div className='bg-white rounded-2xl p-5 space-y-2'>
                        <img src={totalPatinents} alt="" className='max-w-16' />
                        <p className='text-lg lg:text-2xl font-bold'>
                            <CountUp end={1900} duration={4.75} /> +
                        </p>

                        <h2 className='text-gray-500 font-bold text-lg lg:text-xl'>Total Doctors</h2>
                    </div>

                    <div className='bg-white rounded-2xl p-5 space-y-2'>
                        <img src={totalStuffs} alt="" className='max-w-16' />
                        <p className='text-lg lg:text-2xl font-bold'>
                            <CountUp end={300} duration={3.75} /> +
                        </p>

                        <h2 className='text-gray-500 font-bold text-lg lg:text-xl'>Total Doctors</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorsContainer;