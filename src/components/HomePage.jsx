import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Toko from './Toko'
import { useState } from 'react'

function HomePage({user}) {

  const [ShowChat, SetShowChat] = useState(true)

  const setChat = () => {
    SetShowChat(true)
    // console.log("chat")
  }
  const setToko = () => {
    SetShowChat(false)
    // console.log("toko")
  }

  return (


    <div>
        <Header/>
        <div className='flex'>
            <Sidebar onChatClick={setChat} onTokoClick={setToko}/>
            <div className='w-full'>
            {console.log(user)}
             {ShowChat ? <Chat user={user}/> : <Toko />}
            </div>
        </div>    
    </div>



  )
}

export default HomePage