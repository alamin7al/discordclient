import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';

import './DownloadHome.css'
import Ios from './Ios';

const DownloadHeader = lazy(() => import('./DownloadHeader'));
const DownloadNavbar = lazy(() => import('./DownloadNavbar'));
const Footer = lazy(() => import('../Footer/Footer'));





const DownloadHome = () => {
    return (


        <div className=''>
            <Suspense fallback={
                <div style={{marginTop:'250px'}}>
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
                <Spinner  animation="border" variant="dark" />
               
              </div>}>

                <div >
                    <div className='downloadbackground'>
                        <DownloadNavbar />
                        <DownloadHeader />
                    </div>
                    <Ios />

                    <Footer />
                </div>
            </Suspense>

        </div>






    );
};

export default DownloadHome;