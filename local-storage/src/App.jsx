import React from 'react'

const App = () => {

  const user = {
    name: 'akash',
    age:25,
    profession: 'sde'
  }

  localStorage.setItem('user', JSON.stringify(user));
  const fetchUser = localStorage.getItem('user');
  console.log(JSON.parse(fetchUser));

  return (
    <div>App</div>
  )
}

export default App