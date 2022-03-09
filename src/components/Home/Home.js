import React from 'react'
import { useSelector } from 'react-redux'
import Navbarcomp from '../Navbar/Navbarcomp'
import Cardcomp from './Cardcomp'
import Techforumcomp from './Techforumcomp'
import './Home.css'

const Home = () => {
  const blogs=useSelector((state)=>state.blogReducer)
  console.log(blogs);
  return (
    <div>
    <Navbarcomp /> 
    <Techforumcomp />
    <div className='allCards'>
      {blogs.map((item)=>{
        return(
          <Cardcomp key={item.id} blog={item} />
        )
      })}
    </div>
    </div>
  )
}

export default Home