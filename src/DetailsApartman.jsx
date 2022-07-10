import React, { useEffect, useState } from 'react';
import {FaBed} from 'react-icons/fa';
import {MdAir} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {GiResize} from 'react-icons/gi';
import {IoMdPricetags} from 'react-icons/io';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useLocation, useParams } from 'react-router-dom';



function DetailsApartman(props) {
  const id=useParams().id;
const apartmani=props.apartmani;

const apartman=apartmani[id-1];
const onClick=()=>{
  let dani=1;
  if(date[1].getMonth()==date[0].getMonth())
  dani=date[1].getDate()-date[0].getDate();
  else {
   const daysinInMonth=daysInMonth(date[0].getMonth()+1,date[0].getFullYear());
   const daysLeftInMoth=daysinInMonth-date[0].getDate();
    const daysInOtherMonth=date[1].getDate();
    dani=daysInOtherMonth+ daysLeftInMoth;
  }
  props.uplati(apartman.cena*dani);
  props.changleAvailability(id,date)
}

 let date=[];
 const setDate=(dates)=>{


let ood=Date.parse(dates[0]);
let dateood=new Date(ood);
let doo=Date.parse(dates[1]);
let datedoo=new Date(doo);
  
   date=[dateood,datedoo];
  
 };

 console.log(apartman);
console.log(apartman.unavailableDates.length);


  return (< >
  
      <div className='imageDetails h-100  bg-warning'  style={{
   
   backgroundImage: 'url('+ apartman.image+')'
    
  
  }}>
      
      </div>

      <div className="iconsinfo p-4 d-flex justify-content-around">
     
        
      <div className="element ">
              <IoMdPricetags  size={60}></IoMdPricetags>
              <p className='w-100 d-flex justify-content-center'>{apartman.cena}$</p>
              </div>
              <div className="element ">
              <FaBed size={60}></FaBed>
              <p className='w-100 d-flex justify-content-center'>{apartman.brojKreveta}</p>
              </div>
      
              <div className="element ">
              <MdAir className=' w-100' size={60}></MdAir>
              <p className='w-100 d-flex justify-content-center'>{apartman.klimatizovano?"Klimatizovano":"Nije Klimatizovano"}</p>
              </div>
              <div className="element ">
              <AiOutlineWifi size={60}></AiOutlineWifi>
              <p className='w-100 d-flex justify-content-center'>{apartman.wifi? "WiFi": "No WiFi"}</p>
              </div>
              <div className="element ">
              <GiResize size={60}></GiResize>
              <p className='w-100 d-flex justify-content-center'>{apartman.kvadratura}</p>
              </div>


      </div>


      <div className="calendarContainer    w-100 d-flex justify-content-center">
      <Calendar   tileDisabled={({date, view}) =>
                    (view === 'month') && // Block day tiles only
                    apartman.unavailableDates.some(disabledDate =>
                      date.getFullYear() === disabledDate.getFullYear() &&
                      date.getMonth() === disabledDate.getMonth() &&
                      date.getDate() === disabledDate.getDate()
                    )} selectRange={true}  onChange={setDate} minDate={new Date()}  ></Calendar>

      </div>


      <div className="ContainerButton  m-5 d-flex justify-content-center">
      <button className='dugme col-3' onClick={()=>{ onClick()}} >
        Reserve
      </button>
      </div>
      
   
    
  </>);
}
function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

export default DetailsApartman;
