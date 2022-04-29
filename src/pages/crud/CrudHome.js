import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';


const CrudDeshbord = lazy(() => import('./CrudDeshbord'));
const CrudNavigation = lazy(() => import('./CrudNavigation'));
const Crudprofile = lazy(() => import('./Crudprofile'));





export default function CrudHome() {
    return (
        <div style={{ background: '#5865F2' }} className=''>

            <Suspense fallback={<div style={{ marginTop: '250px' }}>
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


                <div className="nitro">
                    <CrudNavigation />
                    <Crudprofile />
                </div>

                <CrudDeshbord />


            </Suspense>









        </div>
    )
}
