import React, { useState } from 'react'
import styles from './CatchyCard.module.css'

export default function CatchyCard({ title, src, width = "auto", isActive = false, isActiveInit = false }) {
    // const [isActive, setIsActive] = useState(isActiveInit)
    // const handleActive = () => {
    //     setIsActive(!isActive)
    // }
    return (
        <div
            // onClick={handleActive}
            className={`${isActive ? 'border-blue-600' : 'border-blue-100'} relative select-none h-[180px] cursor-pointer border-[2px]  border-solid transition duration-300 ease-in-out flex flex-col justify-start items-center rounded-[15px] bg-blue-600 hover:!border-blue-600`}
            style={{ width: width }}
        >
            <div className={`${isActive ? 'gap-3 rounded-[13px] h-[150px] z-0' : 'gap-5 rounded-[12px] h-[180px] z-[1]'} flex flex-col items-center justify-start bg-white w-full p-4 transition-all duration-200 ease-in-out border-none hover:rounded-[13px]`}>
                <img
                    src={src}
                    className={`${isActive ? 'w-[55px]' : 'w-[80px]'} transition-all ease-in-out duration-300`}
                />
                <span className='font-semibold text-lg'>{title}</span>
            </div>
            <div className={`${isActive ? 'bottom-0 opacity-100 duration-200 delay-150' : '-bottom-[0px] opacity-0 duration-0 delay-0'} ${styles.catchyCircle} w-[50px] h-[50px] absolute flex justify-center items-center text-white  rounded-full bg-blue-600 bottom-0 transition-all ease-in-out`}>
                <div className={`${isActive ? 'bottom-[7px]' : 'bottom-[100px]'} flex justify-center items-center bg-[#ffffff66] rounded-full w-[35px] h-[35px] z-[2] absolute transition-all ease-in-out duration-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
