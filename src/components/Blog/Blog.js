import React,{useState}from 'react'
import Navbarcomp from '../Navbar/Navbarcomp'
import { InputGroup, FormControl,Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addEntry, setshowCard} from '../../redux/action'
import { useNavigate } from "react-router-dom";
import './Blog.css'

const Blog = () => {
  const dispatch=useDispatch()

  let navigate = useNavigate(); 

    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [category, setcategory] = useState('')
    const [content, setcontent] = useState('')
    const [date, setdate] = useState('2022-02-02')
    const handleSubmit=()=>{
        if(title.trim()=="" ||
         title.trim().length <3 
         )alert("Invalid Title")

         if(author.trim()=="" ||
         author.trim().length <3 
         )alert("Invalid Author Name")

         if(content.trim()=="" 
        //||  content.trim().length <30
         )alert("Content cannot be less than 30 Charecters")

        //  console.log(title);
        //  console.log(author);
        //  console.log(category);
        //  console.log(content);
        //  console.log(date);

        dispatch(addEntry(
          title,
          author,
          date,
          category,
          content
        ))


        dispatch(setshowCard())

        let path = '/'; 
        navigate(path);
         
    }
  return (
    <div>
        <Navbarcomp />
        <div className="formPart">
        <form >
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <FormControl
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Author</InputGroup.Text>
        <FormControl
         aria-label="Username"
         aria-describedby="basic-addon1"
         value={author}
          onChange={(e)=>setauthor(e.target.value)}
        />
        </InputGroup>



        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Post Date</InputGroup.Text>
        <FormControl
        type='date'
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={date}
        onChange={(e)=>setdate(e.target.value)}
        />
        </InputGroup>




        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Post Category</InputGroup.Text>
        <FormControl
        aria-label="Username"
         aria-describedby="basic-addon1"
         value={category}
         onChange={(e)=>setcategory(e.target.value)}
        />
        </InputGroup>

        <Form.Control
      as="textarea"
      placeholder="Post Your Content Here"
      style={{ height: '30vh', marginBottom:'1vh' }}
      value={content}
      onChange={(e)=>setcontent(e.target.value)}
    />
        <Button onClick={handleSubmit} variant="success">POST</Button>
        </form>
        </div>
    </div>
  )
}

export default Blog