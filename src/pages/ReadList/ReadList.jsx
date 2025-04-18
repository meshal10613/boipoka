import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import { getStoreBook } from '../../utility/AddToDB';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoreBook();
        const myReadList = data.filter(book => storedBookData.includes(book.bookId));
        setReadList(myReadList)
    }
    , []);
    const handleSort = (type) => {
        setSort(type);
        if(type === "Ratings"){
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
        }
        if(type === "Number of Pages"){
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages);
        }
        if(type === "Publish Year"){
            const sortedByYear = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedByYear);
        }
    }

    return (
        <div>
            <div className='bg-gray-100 py-10 mx-auto rounded-xl text-center mb-5'>
                <h1 className='text-3xl font-bold'>Books</h1>
            </div>
            <div className='mb-5 md:mb-20 flex items-center justify-center'>
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white text-xl rounded-md py-4 px-5">{sort ? sort : "Sort By"} <IoIosArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-gray-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("Ratings")}><a>Ratings</a></li>
                        <li onClick={() => handleSort("Number of Pages")}><a>Number of Pages</a></li>
                        <li onClick={() => handleSort("Publish Year")}><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
            
                <TabPanel>
                    {
                        readList.map((book, index) => 
                            <div key={index} className='border-2 border-gray-300 rounded-xl flex gap-5 my-5 pr-12'>
                                <div>
                                    <img src={book.image} alt="" className='m-5 px-12 py-10 w-[260px] h-[290px] bg-gray-100 rounded-xl'/>
                                </div>
                                <div className='flex-1'>
                                    <h1>{book.bookName}</h1>
                                    <h3>By: {book.author}</h3>
                                    <div className="flex gap-2 items-center">
                                        <p className='font-bold'>Tag:</p>
                                        <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full">
                                            {book.tags[0]}
                                        </span>
                                        <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full">
                                            {book.tags[1]}
                                        </span>
                                        <span><SlLocationPin /></span>
                                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <BsPeople />
                                        <p>Publisher: {book.publisher}</p>
                                        <HiOutlineDocumentChartBar />
                                        <p>Pages: {book.totalPages}</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='flex gap-3'>
                                        <button className='btn rounded-3xl bg-[#328EFF15] text-blue-400 border-none'>Category: {book.category}</button>
                                        <button className='btn rounded-3xl bg-[#FFAC33] text-yellow-100 border-none'>Rating: {book.rating}</button>
                                        <button className='btn rounded-3xl bg-[#23BE0A] text-white border-none'>View Deatails</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;