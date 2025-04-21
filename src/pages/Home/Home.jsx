import React, { useState } from 'react';
import Hero from '../../component/Hero/Hero';
import DoctorsContainer from '../../component/DoctorsContainer/DoctorsContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const [doctors, setDoctors] = useState(data)
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
            <Hero handleSearch = {handleSearch}></Hero>
            <DoctorsContainer doctors = {doctors}></DoctorsContainer>
        </div>
    );
};

export default Home;