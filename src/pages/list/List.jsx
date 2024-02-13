import React, { useState } from 'react'


import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'


import {format} from "date-fns"
//importing css
import './list.css'


import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';

import SearchListItem from '../../components/searchItem/SearchListItem'



export default function List() {
  const location=useLocation()
  
  const[destination,setDestination]=useState(location.state.destination)
  const[date,setDate]=useState(location.state.date)
  const[options,setOptions]=useState(location.state.option)
  const[openDate,setOpenDate]=useState(false)


  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className='listContainer'>
          <div className='listWrapper'>
            <div className='listSearch'>
              <h1 className='listTitle'>
                Search
              </h1>
              <div className='lsItem'>
                <label>Destination</label>
                <input type='text' placeholder={destination}></input>
              </div>
              <div className='lsItem'>
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {
                  openDate &&
                  <DateRange
                   onChange={(item)=>setDate([item.selection])}
                   minDate={new Date()}
                   ranges={date}
                  ></DateRange>
                }
              </div>
              <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min Price <small>per night</small>
                  </span>
                  <input min={0} type='number' className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max Price <small>per night</small>
                  </span>
                  <input min={0} type='number' className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Adults
                  </span>
                  <input min={1} type='number' placeholder={options.adult} className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input min={0} type='number' placeholder={options.children} className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input min={1} type='number' placeholder={options.room} className='lsOptionInput'></input>
                </div>
              </div>
              </div>
              <button>Search</button>
            </div>
            <div className='listResult'>
               <SearchListItem></SearchListItem>
               <SearchListItem></SearchListItem>
               <SearchListItem></SearchListItem>
               <SearchListItem></SearchListItem>
               <SearchListItem></SearchListItem>
            </div>
          </div>
      </div>
    </div>
  )
}
