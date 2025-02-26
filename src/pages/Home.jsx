import React from 'react'
import Image from '../assets/Icre-cream-hero.png'
import Strawberry1 from '../assets/strawberry1.png'
import Strawberry2 from '../assets/Strawberry2.png'


function Home() {
  return (
    <div className='h-screen w-full bg-yellow'>
      {/* <div className="absolute bg-black opacity-20"></div> */}
        <div className='max-w-[1920px] mx-auto'>
            <div className='grid place-items-center h-[95vh]'>
              <div className=' top-34 relative'>
                <img src={Image} alt='Ice cream' className='h-[1046px' />
              </div>
              <div className='relative grid place-items-center top-[-40%] ' >
                <h1 className='text-8xl pb-4 m-4 font-pacifico text-white'>Fresh, Healthy, Naturally Delicious.</h1>
                  <div className='flex'>
                    <div>
                    <img src={Strawberry1} alt='Strawberry' className='h-[200px]' />
                    </div>
                  <p className='text-3xl w-[774px] text-center font-neuton text-brown'>Discover the joy of ice cream crafted with natural flavors, delivering a fresh, healthy, and irresistibly delicious treat in every scoop.</p>
                  <div>
                    <img src={Strawberry2} alt='Strawberry' className='h-[200px]' />
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home
