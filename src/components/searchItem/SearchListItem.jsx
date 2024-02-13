import React from 'react'

//importing css
import './searchitem.css'

//importing images
import Room from '../../assets/room.jpg'

export default function SearchListItem() {
  return (
    <div className='searchItem'>
    <img src={Room}  alt='' className='siImg'></img>
    <div className='siDesc'>
      <h1 className='siTitle'>Tower Street Apartment</h1>
      <span className='siDistance'>500m from center</span>
      <span className='siTaxiOp'>Free Airport Taxi</span>
      <span className='siSubtitle'>
        Studio Apartment with Air conditionaring
      </span>
      <span className='siFeatures'>
        Entire Studio . 1 Bathroom . 21m2 full bed
      </span>
      <span className='siCancelOp'>Free Cancelationing</span>
      <span className='siCancelOpSubtitle'>
        You can cancel later, so lock in this great price today
      </span>
    </div>
    <div className='siDetails'> 
       <div className='siRating'>
         <span>Excellent</span>
         <button>8.9 </button>
       </div>
       <div className='siDetailTexts'>
         <span className='siPrice'>$123</span>
         <span className='siTaxOp'>Includes taxes and fees</span>
         <button className='siCheckBtn'>See Availability</button>
       </div>
    </div>
</div>
  )
}
