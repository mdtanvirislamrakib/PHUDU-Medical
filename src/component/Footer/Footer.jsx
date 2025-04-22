import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white text-black p-10">
            <aside className='space-y-3'>
                <div className='flex items-center gap-2 justify-between'>
                    <img src={logo} alt="" className='max-w-8' />
                    <h1 className='text-2xl font-bold'>Phudu</h1>
                </div>
                <ul className='flex items-center gap-4 lg:gap-8 text-sm lg:text-lg font-semibold'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Home</NavLink>
                    <NavLink to="/my-booking" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>My-Booking</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Blogs</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Contact</NavLink>
                </ul>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-6 cursor-pointer">
                    <Link target='_blank' to="https://www.linkedin.com/in/tanvir-islam-rakib/">
                        <FaLinkedinIn className='text-3xl cursor-pointer' />
                    </Link>

                    <Link target='_blank' to="https://www.facebook.com/">
                        <FaFacebook className='text-3xl cursor-pointer' />
                    </Link>

                    <Link target='_blank' to="https://github.com/mdtanvirislamrakib">

                        <FaGithub className='text-3xl cursor-pointer' />
                    </Link>


                </div>
            </nav>
        </footer>
    );
};

export default Footer;