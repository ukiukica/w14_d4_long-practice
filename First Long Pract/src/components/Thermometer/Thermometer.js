import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext'
import { useEffect, useState } from "react";

function Thermometer() {
  let { temperature, setTemperature } = useClimate()
  let [changingTemp, setChangingTemp] = useState(temperature)

  useEffect(() => {
    const tempInterval = setInterval(() => {
      if (changingTemp > temperature) {
        setTemperature(++temperature)
        if (temperature > changingTemp)
          clearInterval(tempInterval)
      } if (changingTemp < temperature) {
        setTemperature(--temperature)
        if (temperature <= changingTemp)
          clearInterval(tempInterval)
      }
    }, 1000)
  }, [changingTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={changingTemp}
        onAfterChange={(val) => { setChangingTemp(val) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
