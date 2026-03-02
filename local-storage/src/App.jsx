import React from 'react'
import axios from 'axios';
const App = () => {

  // const user = {
  //   name: 'akash',
  //   age:25,
  //   profession: 'sde'
  // }

  // localStorage.setItem('user', JSON.stringify(user));
  // const fetchUser = localStorage.getItem('user');
  // console.log(JSON.parse(fetchUser));

  const response = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //const data1 = await data.json();
    console.log(response.data);
  }

  return (
    <button onClick={response}>click</button>
  )
}

export default App