import React from 'react'
import Hand from '../assets/flavor/Ice_cream_flavor.png'
import FlavorGallery from '../components/FlavorGallery'


function Flavor() {
  return (
    <div className='h-full w-full bg-blue '>
      {/* FLAVOR HEADING */}
        <div className='h-[160px] w-full bg-brown relative '>
            <div className='px-[142px]'>
              {/* FLAVOR HEADER */}
                <div className=' font-neuton text-white text-right flex flex-col  justify-end py-4'>
                    <h1 className='pr-18 text-4xl'>Our</h1>
                    <h1 className=' text-7xl  pr-10'>FLAVORS</h1>
                </div>
                {/* IMAGE */}
                <div className='absolute bottom-0'>
                  <img src={Hand} alt="Takusi Ice Cream Logo" className="h-30"  />
                </div>
            </div>
        </div>
       
       {/* IAMGE GRID GALLERRY */}   
        <FlavorGallery/>
    </div>
  )
}

export default Flavor




