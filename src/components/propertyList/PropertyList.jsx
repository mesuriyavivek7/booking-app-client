import React from 'react'

//importing css
import './propertylist.css'

//importing images
import Hotel from '../../assets/hotels.jpg'
import Villas from '../../assets/villa.jpg'
import Cabins from '../../assets/cabins.jpg'
import Apart from '../../assets/apartment.jpg'


export default function PropertyList() {
  return (
    <div className='pList'>
    <h1 className='homeTitle'>Browse by property type</h1>
     <div className='pListContainer'>
        <div className='pListItem'>
            <img src={Hotel} className='pListImg' alt=''></img>
            <div className='pListTitle'>
                <h1>Hotels</h1>
                <h2>200 hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={Villas} className='pListImg' alt=''></img>
            <div className='pListTitle'>
                <h1>Villas</h1>
                <h2>102 villas</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={Apart} className='pListImg' alt=''></img>
            <div className='pListTitle'>
                <h1>Apartment</h1>
                <h2>300 apartment</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={Cabins} className='pListImg' alt=''></img>
            <div className='pListTitle'>
                <h1>Cabins</h1>
                <h2>205 cabins</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
