import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  
  const arr  = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    user: "Akash",
    age: 25,
    profession: "Software Engineer"
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    user: "Ankur",
    age: 24,
    profession: "Frontend Developer"
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    user: "Hemant",
    age: 26,
    profession: "Backend Developer"
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    user: "Priya",
    age: 23,
    profession: "UI/UX Designer"
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    user: "Rohit",
    age: 27,
    profession: "DevOps Engineer"
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    user: "Neha",
    age: 22,
    profession: "Data Analyst"
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    user: "Karan",
    age: 28,
    profession: "Machine Learning Engineer"
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    user: "Simran",
    age: 24,
    profession: "Product Manager"
  },
  {
    id: 9,
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    user: "Vikas",
    age: 29,
    profession: "Full Stack Developer"
  },
  {
    id: 10,
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    user: "Riya",
    age: 23,
    profession: "QA Engineer"
  }
];

  return (
    <div className='parent'>
     {arr.map((elem, idx) => {
       return <div key={idx}>
         <Card img={elem.img} user={elem.user} age={elem.age} profession={elem.profession}/>
       </div>
     })}
     
    </div>
  )
}

export default App
