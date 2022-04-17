import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import ProfileDeshbord from './ProfileDeshbord'
import UserProfile from './UserProfile'

export default function ProfileHome() {
  return (
    <div>
      <Navigation />
      <UserProfile />
      <ProfileDeshbord />
      <Footer />
    </div>
  )
}
