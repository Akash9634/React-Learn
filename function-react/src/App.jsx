import React, {useState} from 'react'
 
const App = () => {
  
  const [num, setNum] = useState([10,20,30]);

  const newfun = () => {
  //   const newNum = [...num];
  //   newNum.push(99);
  //   console.log(newNum);
  //  setNum(newNum);
  setNum(prev => [...prev, 99]);
  }
  return (
    <div>
      <h3>{num}</h3> 
      <button onClick={newfun}>CLICK</button>
    </div>
  )
}

export default App