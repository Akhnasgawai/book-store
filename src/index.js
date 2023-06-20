import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './pages/App';
import AddBook from './pages/AddBook';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: 'add-book',
//     element: <AddBook />,
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/book-store' element={<App />} />
        <Route path='/addBook' element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
