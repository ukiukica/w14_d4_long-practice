import {useEffect, useState, useContext} from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const SetCoffeeBean = ({ coffeeBeans }) => {
  const {coffeeBean, setCoffeeBeanId} = useContext(CoffeeContext)
  const [selectedBean, setSelectedBean] = useState(coffeeBean.id)

  useEffect(() => {
    // console.log(selectedBean)
    setSelectedBean(selectedBean)
  }, [coffeeBean, setCoffeeBeanId, selectedBean])

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        onChange={e => setCoffeeBeanId(e.target.value)}

        value={selectedBean}
        name="coffee-bean"
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
