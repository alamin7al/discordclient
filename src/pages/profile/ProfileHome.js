import React from 'react'
import Navigation from '../Navigation/Navigation'
import ProfileDeshbord from './ProfileDeshbord'
import UserProfile from './UserProfile'

export default function ProfileHome() {
  return (
    <div style={{background:'#5865F2'}} className=''>
      <Navigation />
      <UserProfile />
      <ProfileDeshbord />
    </div>
  )
}
