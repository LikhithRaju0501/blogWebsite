import React from 'react'
import Navbarcomp from '../Navbar/Navbarcomp'
import './Contactcomp.css'

const Contactcomp = () => {
  return (
    <div>
        <Navbarcomp />
        <div className='contactcard'>
    <div className="contactImage">
        <div className="contactemail">
            <div className="contactheading"> E M A I L</div>
            <div className="contactdetails">likhithgraju@gmail.com</div>
        </div>
        <div className="contactnumber">
            <div className="contactheading">N U M B E R</div>
            <div className="contactdetails">+91 8892256729</div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Contactcomp