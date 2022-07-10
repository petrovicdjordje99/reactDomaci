import React from 'react';
import {BsBuilding} from 'react-icons/bs';
import MyButtonTopBar from './MyButtonTopBar';
function TopBar(props) {
  const textDugmeta="Uplati"
  return <div className='TopBar  p-4  d-flex '>

      <div className="opis col-4 d-flex">
      <BsBuilding size={50}></BsBuilding>
      <h1 className='mx-3 h-100 d-flex  flex-column  justify-content-center '>Apartmani</h1>
      </div>
  
      <div className="ele  col-8 d-flex justify-content-end">
      <p className='d-flex align-items-center h-100'>{props.stanje}$</p>
        <MyButtonTopBar uplatiButtonClicked={props.uplatiButtonClicked} textButton={textDugmeta}></MyButtonTopBar>

      </div>
     
  </div>;
}

export default TopBar;
