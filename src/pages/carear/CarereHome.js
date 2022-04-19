import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';
const Footer = lazy(() => import('../Footer/Footer'));
const CarererMain = lazy(() => import('./CarererMain'));
const CarereHeder = lazy(() => import('./CarereHeder'));
const CarereFilter = lazy(() => import('./CarereFilter'));
const SaftyNavbr = lazy(() => import('../safety/SaftyNavbr'));

export default function CarereHome() {
  return (
    <div>
      <div>
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

          </div>}></Suspense>
        <SaftyNavbr />
        <div style={{ background: '#F6F6F6' }}>
          <CarereHeder />
          <CarererMain />
          <CarereFilter />
        </div>
        <Footer />
      </div>
    </div>
  )
}
