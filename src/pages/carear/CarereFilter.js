import React, { useState } from 'react'
import FilterData from './FiterData';

export default function CarereFilter() {
  const [filterdata, setFilterData] = useState(FilterData)

  const filterItems = (category) => {
    const newItems = FilterData.filter((item) => item.category === category)
    setFilterData(newItems)
  }


  return (
    <div className='container my-5'>
      <h1 className='text-start'>Filter</h1>
      <div className="d-flex justify-content-arround align-items-center flex-wrap">



        <button onClick={() => filterItems('trust')} className='filterbtn'>Featured</button>
        <button onClick={() => filterItems('Controlling')} className='filterbtn'>Trust & Safty</button>
        <button onClick={() => filterItems('administrative')} className='filterbtn'>Administrative</button>
        <button onClick={() => filterItems('pepole')} className='filterbtn'>Pepole, Talent, and Vibe</button>
        <button onClick={() => filterItems('science')} className='filterbtn'>Data Science</button>
        <button onClick={() => filterItems('legal')} className='filterbtn'>Legal</button>
        <button onClick={() => filterItems('production')} className='filterbtn'>Production</button>
        <button onClick={() => filterItems('machine')} className='filterbtn'>Machine Learning</button>
        <button onClick={() => filterItems('engineering')} className='filterbtn'>Engineering</button>


      </div>
      <div className="my-5">
        <div className="row gx-5 gy-5">
          {
            filterdata.map((s, i) => <>
              <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                <div className='filtercard  '>
                  <div className="p-3">
                    <h2 className='my-3 fiterHeder'> {s.title} </h2>
                    <div className="d-flex justify-content-between align-items-start">
                      <p className='filterText'>{s.desc}</p>
                      <img style={{ height: '30px', width: '30px' }} src={s.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>)
          }
        </div>
      </div>





    </div>
  )
}
