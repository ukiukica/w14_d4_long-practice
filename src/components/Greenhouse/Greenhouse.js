import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import {useTheme} from '../../context/ThemeContext'
import {useContext} from 'react'

function Greenhouse() {
const {themeName, setThemeName} = useTheme()
let srcImg = ''

// if(themeName === 'day'){
//   srcImg = dayImage
// }else {
//   srcImg = nightImage
// }
themeName === 'day' ? srcImg = dayImage : srcImg = nightImage

console.log(srcImg)
  return (
    <section>
      <img  className='greenhouse-img'
            src={srcImg}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
