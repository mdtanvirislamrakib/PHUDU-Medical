import React from 'react';
import { FaRegRegistered } from "react-icons/fa6";
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {

    const days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayIndex = today.getDay();
    const dayName = days[dayIndex];

    const isAvailable = doctor.available.includes(dayName)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm pt-5">
                <figure className='bg-gradient-to-r from-sky-400 to-cyan-300 w-5/6 mx-auto rounded-2xl' >
                    <img
                        src={doctor.image}
                        alt="Shoes" className='w-[200px] h-[200px]' />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-4'>
                        <div>{isAvailable ? (<p className='bg-sky-50 border border-green-600 text-green-500 py-1 px-2 rounded-2xl'>Available</p>) : (<p className='bg-sky-50 border border-red-500 text-red-500 py-1 px-2 rounded-2xl'>Unavailable</p>)}</div>
                        <div className='bg-sky-100 border border-indigo-500 text-indigo-500 py-1 px-2 rounded-2xl'>{doctor.experience} Experience</div>
                    </div>
                    <h2 className="card-title text-xl font-bold">{doctor.name}</h2>
                    <p className='text-gray-500 font-semibold text-lg'>{doctor.education}</p>
                    <p className='text-gray-500 font-semibold text-lg'>{doctor.speciality}</p>
                    <div className='border border-gray-300 border-dashed'></div>
                    <div className='flex items-center gap-3 text-lg text-gray-600 font-semibold'>
                        <FaRegRegistered />
                        <p>Reg No: {doctor.registration_number}</p>
                    </div>
                    <Link to={`/doctor-details/${doctor.id}`}>
                        <button className='w-full hover:bg-indigo-500 hover:text-white font-bold text-xl h-10 border border-indigo-600 rounded-3xl text-indigo-600 transition-all cursor-pointer'>View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default DoctorCard;