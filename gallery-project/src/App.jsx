import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios('https://picsum.photos/v2/list?page=2&limit=30');
    console.log(response.data);
    setData(response.data);
   
  }

  useEffect(function (){
    getData()
  }, [])
  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <button onClick={getData} className='transition-transform duration-150 active:scale-95 px-5 py-5 bg-red-400 m-5 rounded-2xl cursor-pointer'>get data</button>
      
        <div className='flex flex-wrap gap-10 justify-center'>
        {data.map((elem) => {
          return <img key={elem.id} className='object-cover text-white w-100 h-60 border-3 border-gray-600' src={elem.download_url} alt={elem.author} /> 
        })}
      </div>
      <br />
      <div className='flex flex-wrap justify-center gap-15'>
        <button className='bg-gray-500 py-0.5 px-4 transition-transform duration-150 active:scale-95 cursor-pointer'>Prev</button>
        <button className='bg-gray-500 py-0.5 px-4 transition-transform duration-150 active:scale-95 cursor-pointer'>Next</button>
      </div>
    
      
    </div>
  )
}

export default App