import React from 'react';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import { BiRegistered } from "react-icons/bi";
import { addBookings, getBookings } from '../../Ultilities/Ultilities'
import { CiCircleAlert } from "react-icons/ci";
import toast from 'react-hot-toast';



const DoctorDetails = () => {



    const notify = () => toast.success('You Book A Doctor!')
    const notifyWrong = () => toast.error("You Already booked this doctor")
    const notifyNotAvailable = () => toast.error("Doctor is not available today")
    const data = useLoaderData();
    const { id } = useParams();
    const singleDoctor = data.find(doctor => doctor.id === parseInt(id))
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayIndex = today.getDay();
    const dayName = days[dayIndex];

    const isAvailable = singleDoctor.available.includes(dayName)


    const navigate = useNavigate()



    const handleBookings = (e) => {
        e.preventDefault();
        if (isAvailable) {
            const getBooking = getBookings();
            const check = getBooking.some(booking => booking.id === singleDoctor.id)
            if (check) {
                notifyWrong()
                return
            } else {
                notify()
            }
            addBookings(singleDoctor);
            navigate("/my-booking")
        } else {
            notifyNotAvailable()
            return
        }

    }

    return (
        <div className='w-full lg:w-10/12 mx-auto my-5 space-y-8'>
            <div className='bg-white rounded-2xl p-5 lg:px-20 lg:py-10 flex flex-col items-center justify-center space-y-5'>
                <h1 className='text-2xl font-bold lg:text-5xl text-center'>Doctor’s Profile Details</h1>
                <p className='text-sm lg:text-lg font-semibold text-gray-500 text-center'>Becoming a doctor is a meaningful choice because it allows you to heal people, save lives, and make a real difference in your community. It’s a respected and rewarding profession that offers lifelong learning, personal growth, and the opportunity to help others in their most vulnerable moments.</p>
            </div>
            <div className='bg-white rounded-2xl'>
                <div className='flex flex-col lg:flex-row gap-8 lg:px-10 lg:py-8 px-5 py-5'>
                    <div className='bg-gradient-to-r from-blue-300 to-blue-800 rounded-2xl '>

                        <img src={singleDoctor.image} alt="" className='w-[350px] max-h-full mx-auto' />
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-5xl font-bold mb-3'>{singleDoctor.name}</h1>
                        <p className='text-sm lg:text-lg font-semibold text-gray-500 mb-1'>{singleDoctor.education}</p>
                        <p className='text-sm lg:text-lg font-semibold text-gray-500'>{singleDoctor.speciality}</p>
                        <div className=' my-3'>
                            <p className='text-sm lg:text-lg font-semibold text-gray-500'>Working At</p>
                            <p className='text-lg lg:text-xl font-bold'>{singleDoctor.workplace}</p>
                        </div>
                        <div className='border border-gray-200 border-dashed'></div>
                        <div className='flex items-center gap-2 my-1 lg:my-2 text-gray-600 font-semibold text-sm lg:text-lg'>
                            <BiRegistered />
                            <p>Reg No: {singleDoctor.registration_number}</p>
                        </div>
                        <div className='border border-gray-200 border-dashed'></div>

                        <div className='flex items-center gap-5 mt-5'>
                            <p className='text-sm lg:text-lg font-bold'>Availability:</p>
                            <div className='flex items-center gap-2 lg:gap-3 flex-wrap lg:flex-nowrap'>
                                {
                                    singleDoctor.available.map((Availability, index) => <p key={index} className='border border-orange-300 bg-orange-100 text-orange-500 text-sm lg:text-lg px-2 py-1 rounded-4xl'>{Availability}</p>)
                                }
                            </div>
                        </div>
                        <div className='flex items-center gap-4 lg:gap-8 mt-2 lg:mt-4'>
                            <p className='text-sm lg:text-lg font-semibold'>Consultation Fee:</p>
                            <div className='flex items-center gap-1 text-sm lg:text-lg'>
                                <p className='text-indigo-500 font-bold'>৳ {singleDoctor.fee}</p>
                                <p className='text-gray-600 font-semibold'>+Included Vat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl'>
                <div className='p-5 lg:px-10 lg:py-5'>
                    <h1 className='text-xl lg:text-3xl font-bold text-center'>Book an Appointment</h1>
                    <div className='space-y-2 mt-3'>
                        <div className='border border-gray-200 border-dashed'></div>
                        <div className='flex items-center justify-between'>
                            <p className='text-xs lg:text-lg font-bold'>Availability</p>

                            {isAvailable && <p className='bg-sky-100 lg:px-3 px-2 py-1 lg:py-2 text-xs lg:text-lg text-green-400 font-semibold border-green-400 rounded-2xl'>Available</p>}

                            {!isAvailable && <p className='bg-sky-100 lg:px-3 px-2 py-1 lg:py-2 text-xs lg:text-lg text-orange-400 font-semibold border-orange-400 rounded-2xl'>Unavailable</p>}

                            {/* <p className='bg-gray-100 lg:px-3 px-2 py-1 lg:py-2 text-xs lg:text-lg text-green-400 font-semibold border-green-400 rounded-2xl'>{isAvailable ? "Doctor Available Today" : "Doctor is not Available Today"}</p> */}
                        </div>
                        <div className='border border-gray-200 border-dashed'></div>

                        <div className='flex items-center gap-2 bg-gray-50 border border-orange-200 text-center lg:text-sm justify-center rounded-3xl py-1 text-xs text-orange-400 mt-4'>
                            <CiCircleAlert />
                            <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                        </div>
                    </div>

                    <button onClick={handleBookings} className='w-full bg-indigo-600 text-white font-bold text-xl h-10 border border-indigo-600 rounded-3xl hover:bg-indigo-800  transition-all cursor-pointer mt-3'>Book Appointment Now</button>


                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;