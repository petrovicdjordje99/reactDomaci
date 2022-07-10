import React from 'react';
import Dialog from './Dialog';
import DialogCover from './DialogCover';
import Footer from './Footer';
import MainSection from './MainSection';
import TopBar from './TopBar';

function MainPage(props) {
  
 
  return (<>


    <TopBar uplatiButtonClicked={props.uplatiClicked} stanje={props.kolicina}/>
    <MainSection aparmtaniNiz={props.apartmans}/>
    <Footer/>
    <DialogCover isActiveDialog={props.isActive} ></DialogCover>
<Dialog isActiveDialog={props.isActive} odustaniButtonClicked={props.odustaniButtonClicked} uplatiButtonClicked={props.uplatiClickedDialog}></Dialog>
</>
  );
}

export default MainPage;
