import { memo } from "react";

const Stars = () => {

    const n = 20;

    const randomSize = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const randomX = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const randomY = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    return (
        <>
            {
                [...Array(n)].map((e, i) =>
                <>
                    <div
                        key={i}
                        className='stars star1'
                        style={{
                            width: `${randomSize(2, 7)}px`,
                            left: `${randomX(1, 98)}%`,
                            top: `${randomY(1, 98)}%`
                        }}></div>
                         <div
                        key={i}
                        className='stars star2'
                        style={{
                            width: `${randomSize(2, 7)}px`,
                            left: `${randomX(1, 98)}%`,
                            top: `${randomY(1, 98)}%`
                        }}></div>
                         <div
                        key={i}
                        className='stars star3'
                        style={{
                            width: `${randomSize(2, 7)}px`,
                            left: `${randomX(1, 98)}%`,
                            top: `${randomY(1, 98)}%`
                        }}></div>
                         <div
                        key={i}
                        className='stars star4'
                        style={{
                            width: `${randomSize(2, 7)}px`,
                            left: `${randomX(1, 98)}%`,
                            top: `${randomY(1, 98)}%`
                        }}></div>  
                        </>
                )
            }
        </>
    )
}
export default memo(Stars);