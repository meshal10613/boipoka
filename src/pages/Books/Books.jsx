import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    return (
        <div className='mx-auto w-11/12 space-y-5 my-10'>
            <h1 className='text-5xl text-center font-semibold'>Books</h1>
            <Suspense fallback={<p>Loading....</p>}>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        booksData.map((book, index) => <Book key={index} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;