import React from 'react';
import logo from './logo.svg';
import './App.css';
import StrikeOffText from './components/StrikeOffText'
import DifferentMessages from './components/DifferentMessages'
import GreetingMsg from './components/GreetingMsg'
import Imageshow from './components/Imageshow'
import RadioButtons from './components/RadioButtons'
import CheckBoxes from './components/CheckBoxes'
import Dropdownlist from './components/Dropdownlist'
import DisableButton from './components/DisableButton'
import StopWatch from './components/StopWatch'
import CommentBox from './components/CommentBox'

function App() {
  return (
    <div className="App">
      <StrikeOffText />
      <Imageshow />
      <DifferentMessages />
      <GreetingMsg />
      <RadioButtons flavours={['vennila',"Chocolate",'straberry',"mango",]}/>
      <CheckBoxes cities={['Hyderabad','Rajahmundry','Kurnool',"Bangalore"]}/>
      <Dropdownlist states={['select your state','AndhraPradesh','Telangana','Maharastra',"Kerala"]} />
      <DisableButton />
      <StopWatch />
      <CommentBox />
    </div>
  );
}

export default App;
