import { useState,useEffect,useRef } from 'react'
import {format} from 'date-fns';

function App(){
  const [time,setTime] = useState(0);
  const [isRunning,setIsRunning] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if(isRunning){
     timeRef.current =  setInterval(() => {
      setTime(prev => prev + 10);
      console.log(time);
     },10);
    }else {
      clearInterval(timeRef.current);
    }
  },[isRunning]);


  const handleRun = () => {
    setIsRunning(prev => !prev);
  }

  const handleReset = () => {
    setTime(0);
  }


  const timeFormat = (time) => {
    return format(time, 's:SS')
  }
  return (
    <div>
      <h1>StopWatch</h1>

      <h4>Time: {timeFormat(time)}</h4>
      <div>
        <button onClick={handleRun}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}


export default App;