import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

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

        </div>
    );
};

export default DoctorsContainer;