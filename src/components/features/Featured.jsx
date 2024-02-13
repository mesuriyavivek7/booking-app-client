import React from 'react'

//importing images
import Austin from '../../assets/austin.jpg'
import Dublin from '../../assets/dublin.jpg'
import Rome from '../../assets/rome.jpg'

//importing css
import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
     <div className='featuredContainer'>
       <div className='featuredItem'>
         <img className='featuredImg' src={Dublin} alt=''></img>
         <div className='featuredTitles'>
            <h1>Dublin</h1>
            <h2>123 poperties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img className='featuredImg' src={Austin} alt=''></img>
         <div className='featuredTitles'>
            <h1>Austin</h1>
            <h2>200 poperties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img className='featuredImg' src={Rome} alt=''></img>
         <div className='featuredTitles'>
            <h1>Rome</h1>
            <h2>90 poperties</h2>
         </div>
       </div>
      </div>
    </div>
  )
}
