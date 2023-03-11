import React from 'react'
import ChatListItem from './ChatListItem'

function ChatList() {
  return (

      <div class="flex flex-col w-1/5 border-r-2 overflow-y-auto">
       
        <div class="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        
      
        <ChatListItem/>
    

     
      </div>

  )
}

export default ChatList