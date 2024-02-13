import React, { useState } from 'react'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
//importing css
import "./hotel.css"

//importing icons
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

//importing images
import Himg1 from '../../assets/hotel-room-1.jpg'
import Himg2 from '../../assets/hotel-room-2.jpg'
import Himg3 from '../../assets/hotel-room-3.jpg'
import Himg4 from '../../assets/hotel-room-4.jpg'
import Himg5 from '../../assets/hotel-room-5.jpg'
import Himg6 from '../../assets/hotel-room-6.jpg'

export default function Hotel() {
  const photoes=[Himg1,Himg2,Himg3,Himg4,Himg5,Himg6]
  const [slideNumber,setSlideNumber]=useState(0)
  const [slideOpen,setSlideOpen]=useState(false)

  const handleOpen=(i)=>{
    setSlideNumber(i)
    setSlideOpen(true)
  }
  const handleMove=(move)=>{
      let newslidenumber

      if(move==='b'){
         newslidenumber=slideNumber===0?5:slideNumber-1
      }else{
         newslidenumber=slideNumber===5?0:slideNumber+1
      }

      setSlideNumber(newslidenumber)
  }
  return (
    <div>
       <Navbar></Navbar>
       <Header type='list'></Header>
       <div className='hotelContainer'>
       {
         slideOpen && 
         <div className='Slider'>
            <ArrowBackIosIcon className='arrow arrow-left' onClick={()=>handleMove("back")}></ArrowBackIosIcon>
            <ArrowForwardIosIcon className='arrow arrow-right' onClick={()=>handleMove("next")}></ArrowForwardIosIcon>
            <div className='sliderWrapper'>
              <img src={photoes[slideNumber]} className='sliderImg' alt=''></img>
            </div>
            <CloseIcon onClick={()=>setSlideOpen(!slideOpen)} className='close'></CloseIcon>
        </div>
       }
        <div className='hotelWrapper'>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAdress'>
              <FmdGoodIcon></FmdGoodIcon>
              <span>Elton st 125 new york</span>
          </div>
          <span className='hotelDistance'>
             Excellent location - 500m from center 
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {
              photoes.map((photo,i)=>(
                <div className='hotelImgWrapper'>
                    <img onClick={()=>handleOpen(i)} src={photo} className='hotelImg' alt=''></img>
                </div>
              ))
            }
          </div>
          <div className='hotelDetails'>
             <div className='hotelDetailsText'>
               <button className='booknow'>Reserve or Book Now!</button>
               <h1 className='hotelTitle'>stay in the heart of the kronk</h1>
               <p className='hotelDesc'>
               It is a long established fact that a reader will be 
               distracted by the readable content of a page when looking at its layout.
               The point of using Lorem Ipsum is that it has a more-or-less normal 
               distribution of letters, as opposed to using 'Content here, content here',
               making it look like readable English. Many desktop publishing packages and web page editors 
               now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
               many web sites still in their infancy. 
               </p>
             </div>
             <div className='hotelDetailsPrice'>
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Located at real heart of kronk, this propertyes 
                has an excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 night)
              </h2>
              <button>Reserve or Book Now!</button>
             </div>
          </div>
        </div>
       </div>
       <MailList></MailList>
       <Footer></Footer>
    </div>
  )
}
