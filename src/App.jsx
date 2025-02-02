import React from 'react';
//import { NavLink } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtDetail from './pages/ArtDetail';
import Artworks from './pages/Artworks';
import Bio from './pages/Bio';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },     // note: (index: true <=> path:'')
      { path: 'artworks', element: <Artworks /> },
      { path: 'artworks/:artId', element: <ArtDetail />},
      { path: 'bio', element: <Bio />}
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
