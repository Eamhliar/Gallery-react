import React from 'react';
//import { NavLink } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtDetail from './components/ArtDetail';
import Artworks from './components/Artworks';
import Bio from './components/Bio';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/Home';
import RootLayout from './components/RootLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
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
