import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/AddToDB';


const BookDeatails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const books = useLoaderData();
    const singleBook = books.find(book => book.bookId == bookId);
    const markAsRead = (id) => {
        addToStoreDB(id);
    }
    return (
        <div className='w-11/12 mx-auto m-10'>
            <div className="p-10 rounded-2xl flex flex-col md:flex-row gap-10">
                {/* Book Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-xl p-5 md:p-20 bg-gray-100">
                    <img
                    src={singleBook.image}
                    alt="Book Cover"
                    className="w-80 object-cover"
                    />
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-5">
                    <div className='space-y-3'>
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">{singleBook.bookName}</h1>
                        <p className="text-gray-600 text-lg">{singleBook.author}</p>
                        <div className="divider"></div>
                    </div>
                    <div className="text-sm text-gray-500">
                        <p className="font-semibold text-gray-700 text-xl">{singleBook.category}</p>
                        <div className="divider"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-gray-700 text-[18px"><span className='font-bold'>Review:</span> {singleBook.review}</p>
                        <div className="flex gap-2">
                            <p className='font-bold'>Tag:</p>
                            <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full">
                                {singleBook.tags[0]}
                            </span>
                            <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full">
                                {singleBook.tags[1]}
                            </span>
                        </div>
                        <div className="divider"></div>
                    </div>

                    <div className='w-[40%]'>
                        <p className='flex justify-between'>
                            <span className='text-gray-500 font-light'>Number of Pages:</span>
                            <span className='font-semibold'>{singleBook.totalPages}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='text-gray-500 font-light'>Publisher:</span>
                            <span className='font-semibold'>{singleBook.publisher}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='text-gray-500 font-light'>Year of Publishing:</span>
                            <span className='font-semibold'>{singleBook.yearOfPublishing}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='text-gray-500 font-light'>Rating:</span>
                            <span className='font-semibold'>{singleBook.rating}</span>
                        </p>
                    </div>


                    <div className='flex gap-6'>
                        {/* <Link to="/"> */}
                            <button onClick={() => {markAsRead(singleBook.bookId)}} className='btn p-6 text-xl rounded-md'>Mark as Read</button>
                        {/* </Link> */}
                        {/* <Link to="/"> */}
                            <button className='btn p-6 text-xl rounded-md text-white bg-[#59C6D2]'>Add to Whislist</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDeatails;