import React from 'react'
import TokoIcon from '../assets/shopee-logo-31405.png'

function CardToko() {

  return (

    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
        <img class="w-full" src={TokoIcon} alt="Icon Toko"/>
        <div className="px-6 py-4 items-center">
            <div class="w-32 text-lg mb-2 text-center bg-orange-300 p-1 rounded-xl items-center" alt="Nama Toko" style={{ margin: '0 auto' }}>Toko Cantik</div>
        </div>

        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-blue-200 rounded-xl px-3 py-6 text-sm font-semibold text-gray-700 mr-2 mb-2 w-full">
                <p className='text-center text-white text-xl'>Tersambung</p>
            </span>
        </div>

    </div>
    
  )

}

export default CardToko