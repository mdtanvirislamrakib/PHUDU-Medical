import React from 'react';
import bannerImage from '../../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className='hero-background border-2 border-white rounded-4xl w-11/12 mx-auto py-10'>
            <div className='w-9/12 mx-auto flex flex-col items-center justify-center space-y-5'>
                <h1 className='text-2xl lg:text-5xl font-bold text-center'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='text-center text-sm lg:text-lg font-semibold text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <form className='flex items-center justify-center flex-col lg:flex-row gap-8 w-full'>
                    <input type="text" placeholder='Search any doctor...' className='h-10 w-2/3 px-2 outline-none focus:shadow-md rounded-2xl border border-gray-200 text-lg' />
                    <button type="submit" className='text-white bg-indigo-600 rounded-3xl px-5 py-2 hover:bg-indigo-800 transition-all cursor-pointer'>Search Now</button>
                </form>

                <div className='flex items-center justify-center gap-8'>
                    <img src={bannerImage} alt="" />
                    <img src={bannerImage} alt="" className='hidden lg:block' />
                </div>

            </div>
        </div>
    );
};

export default Hero;