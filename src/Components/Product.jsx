import React from 'react';
import { Link } from 'react-router-dom';

function Product({element}) {

  
  return <div className='Apartman   col-7   justify-content-center d-flex flex-column align-items-center'>
     

    
    <img src={element.image} className='image' ></img>

      

   
      <h3 className='p-4 ' >{element.ime}</h3>
      <h4>{element.cena}$</h4>
  
  
        
          <Link className='dugmeTxt col-8 d-flex justify-content-center' 
                to={{
                  pathname: '/Apartman/'+element.id,
                 
                }}>
                      <button className='dugme col-6 m-4  '>     Reserve</button>
                      
            
         </Link>
 
      

  </div>;
}

export default Product;
