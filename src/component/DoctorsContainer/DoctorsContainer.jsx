import React from 'react';
import { useLoaderData } from 'react-router';
import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorsContainer = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='py-10 lg:py-20'>
            <h1 className=' text-2xl lg:text-4xl font-bold text-center mb-3'>Our Doctors</h1>
            <p className='text-gray-600 font-semibold text-center w-7/10 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-10/12 mx-auto mt-10'>
                {
                    data.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default DoctorsContainer;