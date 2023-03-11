import React from 'react'
import CardToko from './CardToko'

function Toko() {
  return (
    <div>
        <div>
            <h2 className='pl-3 font-bold text-2xl'>
                Shop
            </h2>
        </div>
        <div className='flex p-3'>
            <CardToko/>
        </div>
    </div>
  )
}

export default Toko