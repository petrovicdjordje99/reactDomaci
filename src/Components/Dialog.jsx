import React, { useEffect } from 'react';

function Dialog(props) {
   const uplatiClickedD=()=>{props.uplatiButtonClicked(parseInt(document.getElementById("numberField").value));};


  return (
      <div className={!props.isActiveDialog? 'dialog  flex-column align-items-center p-4 d-flex justify-content-around ':'dialog  show flex-column align-items-center p-4 d-flex justify-content-around'}>
          <div className=" form-outline topDeo d-flex justiify-content-center   flex-column" >
                    
          <label className="form-label d-flex justify-content-center" htmlFor='numberField' > <h2>Uplata</h2></label>  
          <input className='form-control kolicinaD' type="number"id="numberField" ></input>
         
          </div>
          
         
          <div className=' DialogButtons w-75  d-flex justify-content-around'>
          <button className='col-5 border-0 rounded' onClick={props.odustaniButtonClicked}>Odustani</button>
            <button className='col-5  border-0 rounded' onClick={uplatiClickedD}>Uplati</button>
           
          </div>
      </div>
  );
}

export default Dialog;
