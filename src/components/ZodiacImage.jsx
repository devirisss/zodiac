import Aquarius from '../images/Aquarius.png';
import Pisces from '../images/Pisces.png';
import Aries from '../images/Aries.png';
import Taurus from '../images/Taurus.png';
import Gemini from '../images/Gemini.png';
import Cancer from '../images/Cancer.png';
import Leo from '../images/Leo.png';
import Virgo from '../images/Virgo.png';
import Libra from '../images/Libra.png';
import Scorpio from '../images/Scorpio.png';
import Sagittarius from '../images/Sagittarius.png';
import Capricorn from '../images/Capricorn.png';

const ZodiacImage = ({ data }) => {

    let image;

    const images = () => {
        console.log(data.name);
        switch (data.name) {
            case 'Aquarius':
                image = Aquarius;
                break;
            case 'Pisces':
                image = Pisces;
            case 'Aries':
                image = Aries;
                break;
            case 'Taurus':
                image = Taurus;
                break;
            case 'Gemini':
                image = Gemini;
                break;
            case 'Cancer':
                image = Cancer;
                break;
            case 'Leo':
                image = Leo;
                break;
            case 'Virgo':
                image = Virgo;
                break;
            case 'Libra':
                image = Libra;
                break;
            case 'Scorpio':
                image = Scorpio;
                break;
            case 'Sagittarius':
                image = Sagittarius;
                break;
            case 'Capricorn':
                image = Capricorn;
                break;
        }
    }

    images();

    return (
    <img src={image} alt={data.name}></img>
    )
}

export default ZodiacImage;