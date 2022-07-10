import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';
import Dialog from './Components/Dialog';
import DialogCover from './Components/DialogCover';
import { useState } from 'react';
import MainPage from './Components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsApartman from './DetailsApartman';
function App() {
  const apartmani=[
    {
      "id":"1",
      "ime":"Ibis 1",
      "cena":40,
      "klimatizovano":true,
      "brojKreveta":3,
      "wifi":true,
      "kvadratura":40,
      "image":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/52289459.jpg?k=3cb63a9afa21dad3784962d8bd3722fc4f27b5c0210d4118c9b05759c2289823&o=&hp=1"
      ,"unavailableDates":[]
    },
    {
      "id":"2",
      "ime":"Ibis 2",
      "cena":30,
      "klimatizovano":true,
      "brojKreveta":2,
      "wifi":true,
      "kvadratura":30,
      "image":"https://s3.eu-central-1.amazonaws.com/apartmani-u-beogradu/uploads/apartmani/7940/en/thumb/apartments-beograd-novi-beograd-apartment-cikago9.jpg"
      ,"unavailableDates":[]
    },
    {
      "id":"3",
      "ime":"Ibis 3",
      "cena":50,
      "klimatizovano":true,
      "brojKreveta":5,
      "wifi":true,
      "kvadratura":60,
      "image":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/266845989.jpg?k=ad257b475d3d700f0e4503f8b1fc78630754d152505a13053cb5423ba793f9d1&o=&hp=1"
      ,"unavailableDates":[]
    },
    {
      "id":"4",
      "ime":"Ibis 4",
      "cena":70,
      "klimatizovano":true,
      "brojKreveta":5,
      "wifi":true,
      "kvadratura":70,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXmZ7mBrGabI1KjkGzoRi4D_MZjYQrDiUEg&usqp=CAU"
      ,"unavailableDates":[]
    }

  ]
 

const uplati=(kolicinaPrimljena)=>{

  if(kolicinaPrimljena<kolicina) kolicina=kolicina-kolicinaPrimljena;
  else return;
  setKolicina(kolicina);
}
  const changleAvailability=(id,dates)=>{
    apartmani[id].unavailableDates.push(dates);
  
    console.log(apartmani[id]);
  };
  var [kolicina, setKolicina] = useState(0);
  var [isActive, setActive] = useState(false);

  const uplatiClicked=()=>{setActive(!isActive);};
 
  const odustaniClicked=()=>{setActive(false);};
  const uplatiClickedDialog=(kolicinaDobijena)=>{ const kolicinaKonacna=parseInt(kolicina)+parseInt(kolicinaDobijena); setKolicina(kolicinaKonacna); odustaniClicked();}
  return (
    < >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage  uplatiClicked={uplatiClicked} apartmans={apartmani} isActive={isActive} odustaniButtonClicked={odustaniClicked} kolicina={kolicina} uplatiClickedDialog={uplatiClickedDialog}/>}/>
      <Route path="/Apartman/:id" element={<DetailsApartman uplati={uplati} changleAvailability={changleAvailability} apartmani={apartmani} />}/>
    </Routes>
    </BrowserRouter>
  
    </>
  
  );
}

export default App;
