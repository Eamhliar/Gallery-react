import React, {lazy, Suspense} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtDetail from './pages/ArtDetail';
//import Artworks from './pages/Artworks';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';

const Artworks = lazy(() => import('./pages/Artworks'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },     // note: (index: true <=> path:'')
      { path: 'artworks', element:
         <Suspense fallback={<p>Loading arworks...</p>}>
           <Artworks />
         </Suspense> },
      { path: 'artworks/:artId', element: <ArtDetail />},
      { path: 'bio', element: <Bio />},
      { path: 'contact', element: <Contact/>}
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
