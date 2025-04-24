import React, { useEffect, useState } from 'react';
import Hero from '../../component/Hero/Hero';
import DoctorsContainer from '../../component/DoctorsContainer/DoctorsContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const [doctors, setDoctors] = useState(data)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    const handleSearch = (e, text) => {
        e.preventDefault();
        if(text === '') return setDoctors(data)
        const searchedDoctors = data.filter(doctor => 
            doctor.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
            doctor.speciality.toLowerCase().split(" ").includes(text.toLowerCase())
        )
        setDoctors(searchedDoctors)
    }
    return (
        <div>
            {
                loading ? (<span className="loading loading-infinity w-10 md:w-14 lg:w-24 text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>) : (<div>
                    <Hero handleSearch = {handleSearch}></Hero>
                    <DoctorsContainer doctors = {doctors}></DoctorsContainer>
                </div>)
            }
            
        </div>
    );
};

export default Home;