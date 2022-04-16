import React from 'react'
import Footer from '../Footer/Footer'
import SaftyNavbr from '../safety/SaftyNavbr'
import CarereFilter from './CarereFilter'
import CarereHeder from './CarereHeder'
import CarererMain from './CarererMain'

export default function CarereHome() {
  return (
    <div>
      
        <SaftyNavbr/>
        <CarereHeder/>
        <CarererMain/>
        <CarereFilter/>
        <Footer/>
    </div>
  )
}
