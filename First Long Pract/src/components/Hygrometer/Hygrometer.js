import ReactSlider from "react-slider";
import { useClimate } from '../../context/ClimateContext'
import { useEffect, useState } from "react";
import "./Hygrometer.css";

function Hygrometer() {
  let { humidity, setHumidity } = useClimate()
  let [changingHumid, setChangingHumid] = useState(humidity)

  useEffect(() => {
    const humidInterval = setInterval(() => {
      if (changingHumid > humidity) {
        setHumidity(humidity+=2)
        if (humidity > changingHumid)
          clearInterval(humidInterval)
      } if (changingHumid < humidity) {
        setHumidity(humidity-=2)
        if (humidity <= changingHumid)
          clearInterval(humidInterval)
      }
    }, 1000)
  }, [changingHumid])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={changingHumid}
        onAfterChange={(val) => { setChangingHumid(val) }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
