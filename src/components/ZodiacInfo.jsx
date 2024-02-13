import data from '../data/zodiacList.json';
import ZodiacImage from './ZodiacImage';
import { useEffect, useState } from 'react';


const ZodiacInfo = ({ info }) => {

    const [zodiac, setZodiac] = useState({});

    useEffect(() => {
        setZodiac(desiredSign())
    }, [])

    const desiredSign = () => {
        let c = info.split('-');
        let check = new Date(c[0], c[1] - 1, c[2]);
        return data.find(item => {
            return ((check.getMonth() === item.startMonth - 1 && check.getDate() >= item.startDay) || (check.getMonth() === item.endMonth - 1 && check.getDate() <= item.endDay))
        })
    }

    return (
        <div className='zodiacInfo'>
                <h2>{zodiac.name}</h2>
                <ZodiacImage data={zodiac} />
            <div className='line'></div>
            <div className='zodiacDescription'>
                <h4>Element</h4> 
                <p>{zodiac.element}</p>
                <h4>Ruler</h4> 
                <p>{zodiac.ruler}</p>
                <h4>The best compatibility</h4>
                <p>{zodiac.compatibility}</p>
                <h4>Lucky numbers</h4>
                <p>{zodiac.luckyNum}</p>
                <h4>Strengths</h4>
                <p>{zodiac.strength}</p>
                <h4>Weaknesses</h4>
                <p>{zodiac.weakness}</p>
                <h4>Description</h4>
                <p>{zodiac.description}</p>
            </div>
            <p></p>
        </div>
    )
}

export default ZodiacInfo;