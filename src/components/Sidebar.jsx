import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Sidebar({ onChatClick, onTokoClick }) {

const [clicked, setClicked] = useState(false);
const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
  };

  const buttonStyle = {
    backgroundColor: clicked ? 'blue' : 'blue',

  };

  return (
    <div className="grid md:grid-cols-sidebar">
        <div className="flex">
            <div className="flex flex-col h-screen  bg-white shadow w-36 items-center border-x-2">
                
                    
                        <div className="pt-3 pb-4 space-y-1 text-sm " >
                            <div className="rounded-sm grid-cols-1 " >
                                <button
                                    // href=''
                                    onClick={onChatClick}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0834 11.1667V11.1667L11.0905 11.1666C11.1598 11.1657 11.229 11.1605 11.2976 11.1512C11.352 11.1583 11.4292 11.1667 11.5001 11.1667C11.9286 11.1667 12.3475 11.0396 12.7038 10.8015C13.0601 10.5635 13.3378 10.2251 13.5018 9.82917C13.6658 9.43326 13.7087 8.99762 13.6251 8.57732C13.5415 8.15703 13.3352 7.77097 13.0321 7.46796C12.7291 7.16494 12.3431 6.95859 11.9228 6.87499C11.5025 6.79138 11.0668 6.83429 10.6709 6.99828C10.275 7.16227 9.93664 7.43998 9.69856 7.79628C9.46049 8.15259 9.33341 8.57149 9.33341 9.00002C9.33341 9.07193 9.34209 9.15039 9.3492 9.20488C9.34095 9.26537 9.33341 9.3386 9.33341 9.41669C9.33341 9.88082 9.51779 10.3259 9.84598 10.6541C10.1742 10.9823 10.6193 11.1667 11.0834 11.1667ZM5.66675 1.16669H12.3334C14.8148 1.16669 16.8334 3.18533 16.8334 5.66669V12.3334C16.8334 14.8147 14.8148 16.8334 12.3334 16.8334H1.50008C1.41167 16.8334 1.32689 16.7982 1.26438 16.7357C1.20187 16.6732 1.16675 16.5884 1.16675 16.5V5.66669C1.16675 3.18533 3.18539 1.16669 5.66675 1.16669ZM8.15418 10.6541C8.48237 10.3259 8.66675 9.88082 8.66675 9.41669C8.66675 9.338 8.6592 9.26492 8.65095 9.20469C8.65807 9.15002 8.66675 9.07148 8.66675 9.00002C8.66675 8.57149 8.53967 8.15259 8.3016 7.79628C8.06352 7.43998 7.72514 7.16227 7.32923 6.99828C6.93332 6.83429 6.49768 6.79138 6.07739 6.87499C5.65709 6.95859 5.27103 7.16494 4.96802 7.46796C4.665 7.77097 4.45865 8.15703 4.37505 8.57732C4.29145 8.99762 4.33435 9.43326 4.49834 9.82917C4.66233 10.2251 4.94004 10.5635 5.29635 10.8015C5.65265 11.0396 6.07155 11.1667 6.50008 11.1667C6.57137 11.1667 6.64911 11.1582 6.70355 11.1511C6.76651 11.1598 6.83858 11.1667 6.91675 11.1667C7.38088 11.1667 7.826 10.9823 8.15418 10.6541Z" fill="#0C4AC0" stroke="#0C4AC0"/>
                                    </svg>
                                </button>
                                <span className='block text-lg text-blue-600 font-bold'>Chat</span>
                            </div>

                            <div className="rounded-sm pt-3" >
                                <button
                                    // href=''
                                    onClick={onTokoClick}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg width="24" height="24" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00008 7.81419V7.63211L1.883 7.49266C1.43995 6.96502 1.16675 6.28015 1.16675 5.52585V3.16669C1.16675 2.0645 2.06456 1.16669 3.16675 1.16669H14.8334C15.9356 1.16669 16.8334 2.0645 16.8334 3.16669V5.52502C16.8334 6.28027 16.5601 6.96499 16.1174 7.49157L16.0001 7.63108V7.81335V14.8334C16.0001 15.4764 15.4764 16 14.8334 16H3.16675C2.52372 16 2.00008 15.4764 2.00008 14.8334V7.81419ZM14.1001 7.8316L14.1087 7.83145L14.1173 7.83099C15.2883 7.76918 16.1667 6.70289 16.1667 5.52585V3.16669C16.1667 2.4317 15.5699 1.83335 14.8334 1.83335H12.3334H11.8334V2.33335V5.66669C11.8334 6.862 12.8048 7.83335 14.0001 7.83335V7.83344L14.0093 7.83327L14.1001 7.8316ZM7.33341 1.83335H6.83341V2.33335V5.66669C6.83341 6.862 7.80477 7.83335 9.00008 7.83335C10.1954 7.83335 11.1667 6.862 11.1667 5.66669V2.33335V1.83335H10.6667H7.33341ZM6.16675 2.33335V1.83335H5.66675H3.16675C2.43028 1.83335 1.83341 2.4317 1.83341 3.16669V5.52585C1.83341 6.70275 2.71186 7.76947 3.88337 7.83018L3.88336 7.83033L3.89549 7.83066L3.98632 7.83316L3.98632 7.83335H4.00008C5.19539 7.83335 6.16675 6.862 6.16675 5.66669V2.33335ZM6.83341 14.8334V15.3334H7.33341H10.6667H11.1667V14.8334V12.3334V11.8334H10.6667H7.33341H6.83341V12.3334V14.8334ZM11.8334 14.8334V15.3334H12.3334H14.8334H15.3334V14.8334V8.89085V8.24186L14.7059 8.40739C14.5242 8.45532 14.34 8.48596 14.1518 8.49568L14.1505 8.49576C13.7237 8.51892 13.2972 8.44487 12.9031 8.27919C12.5091 8.11351 12.1578 7.86052 11.8758 7.5393L11.5007 7.11208L11.1249 7.53866C10.6049 8.12894 9.84453 8.50002 9.00008 8.50002C8.15564 8.50002 7.39529 8.12894 6.87525 7.53866L6.49943 7.11208L6.12434 7.5393C5.84233 7.86052 5.49106 8.11351 5.09703 8.27919C4.703 8.44487 4.2765 8.51892 3.84968 8.49575L3.84847 8.49569C3.6609 8.48597 3.47583 8.45528 3.29428 8.40739L2.66675 8.24186V8.89085V14.8334V15.3334H3.16675H5.66675H6.16675V14.8334V12.3334C6.16675 11.6903 6.69039 11.1667 7.33341 11.1667H10.6667C11.3098 11.1667 11.8334 11.6903 11.8334 12.3334V14.8334Z" stroke="#0C4AC0"/>
                                    </svg>
                                </button>
                                <span className='block text-lg text-blue-600 font-bold'>Toko</span>
                            </div>

                            <div className="rounded-sm absolute bottom-0 ">
                                <Link to="/login">
                                {/* <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                > */}
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99654 2.5H2.5V17.5H10" stroke="#0C4AC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.75 13.75L17.5 10L13.75 6.25" stroke="#0C4AC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.66675 9.99658H17.5001" stroke="#0C4AC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                {/* </a> */}
                                </Link>
                                <span className='block text-lg text-blue-600 font-bold'>Keluar</span>
                            </div>

                        </div>

            </div>
        </div> 

  </div>
  )
}

export default Sidebar

