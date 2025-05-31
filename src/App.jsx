import { useState,useEffect,useRef } from 'react'


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
    setIsRunning(false)
  }


  const timeFormat = (time) => {
    const min = Math.floor(time/60000);
    const sec = Math.floor((time%60000)/1000);


    return `${min.toString()}: ${sec.toString().padStart(2,"0")}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>

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