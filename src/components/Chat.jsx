import React from 'react'
import ChatTextInput from './ChatTextInput'
import BubbleMessage from './BubbleMessage'
import BubbleSent from './BubbleSent'
import ChatList from './ChatList'

function Chat({user}) {
  return (
    <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">

        <ChatList/>



        <div class="flex flex-col flex-auto h-full p-6">
            <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
            <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                    
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    </div>

                    <BubbleMessage/>

                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div class="flex items-center justify-start flex-row-reverse">
                        <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                        A
                        </div>
                        <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div
                            class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                            Seen
                        </div>
                        </div>
                    </div>
                    </div>
            
                    <BubbleSent/>

                </div>
                </div>
            </div>

            <ChatTextInput/>
            
            </div>
        </div>

        <div className='flex flex-col py-4 pl-4 pr-8 w-64 bg-white flex-shrink-0'> 
        
            <div
            class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full pr py-6 px-4 rounded-lg"
            >
            <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img
                src="https://avatars.githubusercontent.com/u/74719273?v=4"
                alt="Avatar"
                class="h-full w-full"
                />
            </div>
            <div class="text-sm font-semibold mt-2">{user?.name}</div>
            <div class="text-xs text-gray-500">{user?.company}</div>
            </div>
            
            </div>

        </div>
    </div> 
  )
}

export default Chat