import React from 'react'
import { Alert } from 'react-bootstrap'
import './Techforumcomp.css'
import { useSelector, useDispatch } from 'react-redux'
import { resetshowCard } from '../../redux/action'

const Techforumcomp = () => {
  const showCard = useSelector((state)=>state.showCard)
  const dispatch = useDispatch()

  setTimeout(()=>{
    dispatch(resetshowCard())
    console.log(showCard);
  },4000)


  // console.log(showAlert);
  return (
    <div className='bgImage'>
        <div className="homeHeading">
        T E C H - F O R U M !
        </div>
        {showCard? 
        <Alert style={{width:'50vw',marginLeft:'25vw'}}  variant='success'>
         Blog Added
      </Alert>:null}
    </div>
  )
}

export default Techforumcomp