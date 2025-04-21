import React from 'react';
import Hero from '../../component/Hero/Hero';
import DoctorsContainer from '../../component/DoctorsContainer/DoctorsContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <DoctorsContainer data = {data}></DoctorsContainer>
        </div>
    );
};

export default Home;