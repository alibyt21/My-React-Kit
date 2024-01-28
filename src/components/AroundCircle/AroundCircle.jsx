import React, { useEffect, useState } from 'react'

export default function AroundCircle({ dataArray = [], title, radius = 200 }) {
    const [data, setData] = useState(dataArray)
    const [degsArray, setDegsArray] = useState([]);
    const createDegsArray = () => {
        let array = [];
        let progress = 360 / data.length;
        let last = 0;
        for (let index = 0; index < data.length; index++) {
            array.push(last + progress);
            last = last + progress
        }
        setDegsArray(array);
    }
    useEffect(() => {
        createDegsArray();
        console.log(degsArray);
    }, [data])
    const circleJSX = data.map(function (single, index) {
        return (
            <div className="absolute w-[100px] h-[100px] bg-green-100 rounded-full flex justify-center items-center" style={{ right: `${Math.round(Math.sin(degsArray[index] * Math.PI / 180) * radius) + radius}px`, top: `${Math.round(Math.cos(degsArray[index] * Math.PI / 180) * radius) + radius}px` }}>
                {single}
            </div>
        )
    })
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='relative flex justify-center items-center' style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
                {circleJSX}
                <div
                    className='flex justify-center items-center bg-blue-100 rounded-full'
                    style={{ marginTop: `${radius / 2}px`, marginRight: `${radius / 2}px`, width: `${radius*1.3}px`, height: `${radius*1.3}px` }}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}
