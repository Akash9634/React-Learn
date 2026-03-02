import React, {useState} from 'react'
import {useEffect} from 'react'
const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(function (){
    console.log("use effect is running");
  },[num])

  return (


    <div>
      <h3>{num}</h3>
      <h3>{num2}</h3>
      <button onClick={() => {
      setNum(num+1);
    }}>click for num</button>

    <button onClick={() => {
      setNum2(num2+10);
    }}>click for num2</button>
    </div>

    
  )
}

export default App