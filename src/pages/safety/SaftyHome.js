import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';

const SaftyNavbr = lazy(() => import('./SaftyNavbr'));
const SaftyHeder = lazy(() => import('./SaftyHeder'));
const Principale = lazy(() => import('./Principale'));
const Control = lazy(() => import('./Control'));
const Footer = lazy(() => import('../Footer/Footer'));

export default function SaftyHome() {
    return (
        <div>
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

                <div style={{ background: '#5865F2' }}>
                    <SaftyNavbr />
                    <SaftyHeder />
                </div>
                <Principale />
                <Control />

                <Footer />
            </Suspense>
        </div>
    )
}
