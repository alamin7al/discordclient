import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';
const Footer = lazy(() => import('../Footer/Footer'));
const HelpNavbar = lazy(() => import('./HelpNavbar'));
const HelpHeder = lazy(() => import('./HelpHeder'));
const HelpCard = lazy(() => import('./HelpCard'));
// const HelpLast = lazy(() => import('./HelpLast'));

export default function HelpHome() {
    return (
        <div className=''>
            <Suspense fallback={
                <div style={{ marginTop: '250px' }}>
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="dark" />

                </div>}>
                <HelpNavbar />
                <HelpHeder />
                <HelpCard />
                {/* <HelpLast /> */}
                <Footer />
            </Suspense>

        </div>
    )
}
