import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;