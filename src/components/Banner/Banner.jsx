import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-around items-center gap-5 bg-gray-100 rounded-2xl my-10 py-20 px-5'>
            <div className='space-y-5 md:space-y-10 text-center md:text-left'>
                <h1 className='text-6xl font-semibold'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white p-7 text-xl rounded-md'>View The List</button>
            </div>
            <div>
                <img src="./books.jpg" alt="" className='rounded-md'/>
                </div>
        </div>
    );
};

export default Banner;