import React from 'react';
import logo from '../Assets/logo.png';
import {BsMouse} from 'react-icons/bs'
import '../Styles/Misc.scss';

const  Misc = () => {
  return (
    <>
    <div className='cursor'></div>
        <a href='/' className='logo'>
            <img src={logo} alt='logo' data-cursorpointer={true}></img>
        </a>
        <a href='/frenchise' className='franchiseBtn'  data-cursorpointer={true}>
            Get a Frenchise
        </a>

           <BsMouse className="scrollBtn" data-cursorpointer={true} />        
        </>  

  )
}

export default Misc