import React from 'react'
import Mango from '../assets/flavor/mango.jpg'
import Choco from '../assets/flavor/choco.jpg'
import Coconut from '../assets/flavor/coconut.jpg'
import Ube from '../assets/flavor/ube.jpg'
import Strawberry from '../assets/flavor/strawberry.jpg'
import Pandan from '../assets/flavor/pandan.jpg'


function Flavor() {
  return (
    <div className='h-full w-full bg-blue'>
      {/* FLAVOR HEADING */}
        <div className='h-[160px] w-full bg-brown flex items-center justify-center'>
            <h1 className='font-neuton text-white text-9xl'>Our FLAVORS</h1>
        </div>
       {/* IAMGE GRID GALLERRY */}
       <div className='px-[142px] w-full  h-[100  vh]'>
          <div className=' py-6'>
              <div className=' grid grid-cols-3 grid-rows-2 gap-2 items-center justify-center '>
                    <div style={{ backgroundImage: `url(${Mango})` }} className="w-full h-[300px] bg-cover bg-center">
                      <h1 className='relative text-center p-2 text-2xl'>MANGO</h1>
                    </div>


                    <div style={{ backgroundImage: `url(${Ube})` }} className="w-full h-[300px] bg-cover bg-center">
                    </div>
                    <div style={{ backgroundImage: `url(${Choco})` }} className="w-full h-[300px] bg-cover bg-center">
                    </div>
                    <div style={{ backgroundImage: `url(${Pandan})` }} className="w-full h-[300px] bg-cover bg-center">
                    </div>
                    <div style={{ backgroundImage: `url(${Coconut})` }} className="w-full h-[300px] bg-cover bg-center">
                    </div>
                    <div style={{ backgroundImage: `url(${Strawberry})` }} className="w-full h-[300px] bg-cover bg-center">
                    </div>
                    

                    {/* <div>
                    <img src={Ube} alt="Ube" />
                    </div>
                    <div className=''>
                    <img src={Choco} alt="Choco" />
                    </div>
                    <div>
                    <img src={Pandan} alt="Pandan" />
                    </div>
                    <div>
                    <img src={Coconut} alt="Coconut" />
                    </div>
                    <div>
                    <img src={Strawberry} alt="Strawberry" />
                    </div> */}
              </div>
          </div>
       </div>
    </div>
  )
}

export default Flavor
