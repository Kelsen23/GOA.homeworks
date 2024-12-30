import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")) || 0);
  const [intervalId, setIntervalId] = useState(null);
  const [stopped, setStopped] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setCounter(Number(inputValue));
    setInputValue('');

    if (intervalId) {
      clearInterval(intervalId);
    }

    let id = setInterval(() => {
      setCounter(prevCount => {
        if (prevCount - 1 > 0) {
          setStopped(false);
          return prevCount - 1;
        } else {
          clearInterval(id);
          setIntervalId(null);
          setStopped(null);
          return 0;
        }
      })
    }, 1000);
    setIntervalId(id);
  }

  const stopTimer = () => {
    clearInterval(intervalId);
    setStopped(true);
  }

  const resumeTime = () => {
    let id = setInterval(() => {
      setCounter(prevCount => {
        if (prevCount - 1 > 0) {
          setStopped(false);
          return prevCount - 1;
        } else {
          clearInterval(id);
          setIntervalId(null);
          setStopped(null);
          return 0;
        }
      })
    }, 1000);
    setIntervalId(id);
    setStopped(false)
  }

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);


  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter])
  
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" value={inputValue} placeholder='Enter Seconds' onChange={e => setInputValue(e.target.value)} min={1} required />
          <button type='submit'>Submit</button>
        </form>

        <h2>
          Timer: {counter}s. {stopped === null ? "" : <button onClick={stopped === false ? stopTimer : resumeTime}>{stopped === true ? "Resume" : "Stop"}</button>}
        </h2>
      </div>
    </div>
  )
}

export default Timer