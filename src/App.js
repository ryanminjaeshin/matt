import useFetch from './useFetch';
import './App.css';
import { useState, useRef, useEffect, useMemo } from 'react';

function App () {
  const { data } = useFetch('http://localhost:8000/data')
  // const [data, setData] = useState(null);
  const [filteredValue, setFilteredValue] = useState(0);
  const [average, setAverage] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredAverage = (data, filterThreshold) => {
    let sum = 0;
    let len = data.length;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].value > filterThreshold) {
        sum += data[i].value;
      } else {
        len -= 1;
      }
    }
    let avg = sum/len;
    return avg ? avg : null;
  }

  const handleOnChange = e => {
    setFilteredValue(e.target.value)
    setAverage(filteredAverage(data, filteredValue));
  }
  console.log(average);

  return (
    <div className="container">
      {data && data.map((item) => (
        <div className="barContainer">
          <h3>{item.value}</h3>
          <div
            key={item.name}
            className={filteredValue <= item.value ? "bar" : "filtered"}
            style={{"height":`${item.value * 10}px`}}
          />
          <h3>{item.name}</h3>
        </div>
      ))}
      <div className="barContainer">
      { average ?
      <>
      <h3>{average}</h3>
        <div
          className="average"
          style={{"height":`${average * 10}px`}}
        />
        <h3>Average</h3>
        </>
        : null}
      </div>
      <div className="bar-filter">
        <label>
          Filter threshold:
          <input
            type="number"
            value={filteredValue}
            onChange={handleOnChange}
            ref={inputRef}
           />
        </label>
      </div>
    </div>
  );
};

export default App;
