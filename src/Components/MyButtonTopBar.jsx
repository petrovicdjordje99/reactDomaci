import React from 'react';

function MyButtonTopBar(props) {



  return (
    <button className='dugmeTopBar col-2 m-4 ' onClick={props.uplatiButtonClicked}>{props.textButton}
    

</button>
  


  );
}

export default MyButtonTopBar;
