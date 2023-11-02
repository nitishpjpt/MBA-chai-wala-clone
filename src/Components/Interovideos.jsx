import React from 'react'
import video from '../Assets/MBA Chai Wala.mp4'
import '../Styles/intro.scss';

function Interovideos() {
  return (
    <div className='intro'>
      <video src={video} muted autoPlay loop controlsList='nodownload'/>
   <div></div>
</div>
  )
}

export default Interovideos