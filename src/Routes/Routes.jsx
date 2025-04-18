import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import App from '../App';
import ErrorPage from '../pages/ErrorPage.jsx/ErrorPage';
import Home from '../pages/Home/Home';
import BookDeatails from '../pages/BookDeatails/BookDeatails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch("./booksData.json"),
            path: "/",
            Component: Home,
        },
        {
            path: "/readlist",
            loader: () => fetch("./booksData.json"),
            Component: ReadList,
        },
        {
            path: "/bookDeatails/:id",
            loader: () => fetch("./booksData.json"),
            Component: BookDeatails
        }
    ]
    },
]);