import React, {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted by:",title);
        setTitle('');
      }}>
        <input type="text" placeholder='enter your name' value={title} 
        onChange={(e)=>{
          setTitle(e.target.value);
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App