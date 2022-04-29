import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const UserProfile = lazy(() => import('./UserProfile'));
const ProfileDeshbord = lazy(() => import('./ProfileDeshbord'));



export default function ProfileHome() {
  return (
    <div style={{ background: '' }} className=''>

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
        <Navigation />
        <UserProfile />
        <ProfileDeshbord />
      </Suspense>









    </div>
  )
}
