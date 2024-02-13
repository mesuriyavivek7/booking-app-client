import React from 'react'

//importing css
import './featuredproperties.css'

//importing images
import Hotel1 from '../../assets/hotel1.jpg'
import Hotel2 from '../../assets/hotel2.jpg'
import Hotel3 from '../../assets/hotel3.jpg'
import Hotel4 from '../../assets/hotel4.jpg'

export default function FeaturedProperties() {
  return (
    <div className='fp'>
     <h1 className='homeTitle'>
            Homes guests love
       </h1>
    <div className='fpContainer'>
     <div className='fpItem'>
        <img src={Hotel1} className='fpImage' alt=''></img>
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
           <button>8.9</button>
           <span>Excellent</span>
        </div>
     </div>
     <div className='fpItem'>
        <img src={Hotel2} className='fpImage' alt=''></img>
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
           <button>8.9</button>
           <span>Excellent</span>
        </div>
     </div>
     <div className='fpItem'>
        <img src={Hotel3} className='fpImage' alt=''></img>
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
           <button>8.9</button>
           <span>Excellent</span>
        </div>
     </div>
     <div className='fpItem'>
        <img src={Hotel4} className='fpImage' alt=''></img>
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
           <button>8.9</button>
           <span>Excellent</span>
        </div>
     </div>
     </div>
    </div>
  )
}
