import React from 'react';
import Product from './Product';

function Products({niz}) {
 
  
  return <div className='MainContainerProducts  p-5  w-100 '>


  {niz.map(ele=>{
   
    return <Product key={ele.ime} element={ele}></Product>
  })}
      
  </div>;
}

export default Products;
