import React, { useEffect, useRef, useState } from 'react'

export default function AlMarquee({ width, text, speed = 10, isActive = true, direction = "rtl" }) {
    // given speed should be in 0 - 20 range
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const marqueeRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(width);
    const [textWidth, setTextWidth] = useState(null)
    const [position, setPosition] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    const sign = direction === "rtl" ? 1 : -1;


    useEffect(() => {
        setIsFirst(true);
        setContainerWidth(containerRef.current.offsetWidth);
        setTextWidth(textRef.current.offsetWidth);
    }, [isActive])


    useEffect(() => {
        let interval;
        let limit = isFirst ? textWidth : containerWidth + textWidth;
        if (isActive && textWidth) {
            let movement = 0;
            interval = setInterval(() => {
                if (movement <= limit) {
                    movement = movement + 1;
                    setPosition(position => position + sign)
                } else {
                    clearInterval(interval)
                    setPosition((sign * -1) * containerWidth);
                    setIsFinished(isFinished => !isFinished)
                    setIsFirst(false);
                }
            }, 20 - speed);

            return () => {
                clearInterval(interval)
            }
        } else {
            setPosition(0)
        }

    }, [textWidth, isFinished, isFirst, isActive])



    return (
        <div
            ref={containerRef}
            className='overflow-hidden'
            style={{ width: `${containerWidth}px` }}
        >
            <div
                ref={marqueeRef}
                style={{ transform: `translateX(${position}px)`, direction: direction }}
            >
                <span
                    ref={textRef}
                    className='whitespace-nowrap'
                >
                    {text}
                </span>
            </div>
        </div>
    )
}
