import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({book}) => {
    return (
        <Link to={`/bookDeatails/${book.bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:scale-95">
                <figure className='pt-5'>
                    <img
                    src={book.image}
                    alt="Book" 
                    className='px-20 py-10 w-[330px] h-[290px] bg-gray-100 rounded-xl'/>
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        <span className="badge text-green-400 font-semibold bg-gray-100">{book.tags[0]}</span>
                        <span className="badge text-green-400 font-semibold bg-gray-100">{book.tags[1]}</span>
                    </div>
                    <h2 className="card-title text-2xl font-semibold">{book.bookName}</h2>
                    <p className='text-[18px] font-semibold text-gray-500 border-b-2 border-b-gray-400 border-dashed pb-3'>by: {book.author}</p>
                    <div className="flex items-center justify-between font-semibold text-gray-600">
                        <p className='text-xl'>{book.category}</p>
                        <p className='flex-0 flex items-center text-xl'>{book.rating} <CiStar size={25}/></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;