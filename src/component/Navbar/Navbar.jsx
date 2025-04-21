import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className="navbar lg:w-10/12 lg:mx-auto py-5">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu bg-white menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 ">
                        <NavLink className="hover:text-indigo-500">Home</NavLink>
                        <NavLink className="hover:text-indigo-500">My-Booking</NavLink>
                        <NavLink className="hover:text-indigo-500">Blogs</NavLink>
                        <NavLink className="hover:text-indigo-500">Contact</NavLink>
                    </ul>
                </div>
                <div className="  flex items-center gap-2 justify-between">
                    <img src={logo} alt="" className='w-8' />
                    <h1 className='text-2xl font-bold'>Phudu</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-lg lg:text-xl font-semibold">
                    <NavLink to='/'className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Home</NavLink>
                    <NavLink to="/my-booking" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>My-Booking</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Blogs</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-indigo-700" : "hover:text-indigo-500"}>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button type="submit" className='text-white bg-indigo-600 rounded-3xl px-5 py-2 hover:bg-indigo-800 transition-all cursor-pointer'>Emergency</button>
            </div>
        </div>
    );
};

export default Navbar;