import React from 'react'
import Navbarcomp from '../Navbar/Navbarcomp'
import { Table } from 'react-bootstrap'
import './Forumcomp.css'
import { useSelector } from 'react-redux'

const Forumcomp = () => {
  const blogs= useSelector((state)=>state.blogReducer)
  console.log(blogs);
  return (
    <div>
        <Navbarcomp />
        <div  className="tablePart">
        <Table striped responsive   hover variant="dark">
  <thead>
    <tr>
      <th>TITLE</th>
      <th>AUTHOR</th>
      <th>DATE</th>
      <th>CATEGORY</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map((item)=>{
      return(
        <tr key={item.id}>
        <td style={{textTransform:'uppercase'}}>{item.title}</td>
        <td>{item.author}</td>
        <td>{item.date}</td>
        <td>{item.category.trim()===''? 'General':item.category}</td>
      </tr>
      )
    })}
   
   
  </tbody>
</Table>
        </div>
    </div>
  )
}

export default Forumcomp