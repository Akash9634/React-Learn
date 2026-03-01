import React,{useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('')
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...tasks];
    copyTask.push({title,detail});
    setTasks(copyTask);
    console.log(copyTask);
    setTitle('');
    setDetail('');
  }

  const deleteTask = (idx) => {
    const copyTask = [...tasks];
    copyTask.splice(idx,1);
    setTasks(copyTask);
  }


  
  return (
    <div className='h-screen bg-black text-white p-10'>
      <form onSubmit={(e) => {
          submitHandler(e);
        }}className='flex flex-col gap-5 p-10'>
        {/* first input for heading */}
        <input onChange={(e) => {
          setTitle(e.target.value)
        }} value={title} type="text" placeholder='enter notes heading' className='px-5 py-2 border-2 rounded outline-none'/>
        {/* input for task */}
        <textarea onChange={(e) => {
          setDetail(e.target.value)
        }} value={detail} placeholder='enter details' name="" id="" className='px-5 py-2 border-2 rounded outline-none'></textarea>
        <button  className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className='flex lg:w-1/2 flex-wrap p-10'>
        <div className='h-52 w-40 bg-white'>  
          {tasks.map(function (elem, idx){
            return <div key={idx} className='relative h-52 w-40 bg-cover rounded-xl text-black py-9 px-4'>
              
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.detail}</p>
              <button onClick={() => {
                deleteTask(idx)
              }} className='w-full cursor-pointer active:scale-95 py-1 text-xs rounded font-bold text-white bg-red-400 '>delete</button>
            </div>
          })}
      </div>
      </div>
      
    </div>
  )
}

export default App