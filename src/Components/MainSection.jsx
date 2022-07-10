import React from 'react';
import Product from './Product';
import Products from './Products';

function MainSection({aparmtaniNiz}) {


  return <div className='MainSection h-100'>

    <Products niz={aparmtaniNiz}></Products>
    
  </div>;
}

export default MainSection;
