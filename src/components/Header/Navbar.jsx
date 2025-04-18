import React from 'react';
import { Link} from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to="/"><li className='m-2'>Home</li></Link>
        <Link to="/readlist"><li className='m-2'>Listed Books</li></Link>
        <Link><li className='m-2'>Page to Read</li></Link>
    </>
    return (
        <div>
            <div className="navbar md:py-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl md:text-5xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn rounded-md text-white bg-[#23BE0A] transition-all hover:border-[#23BE0A] hover:bg-white hover:text-[#23BE0A]">Sign In</a>
                    <a className="btn rounded-md text-white bg-[#59C6D2] transition-all hover:border-[#59C6D2] hover:bg-white hover:text-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;