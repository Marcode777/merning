import React, { Component } from 'react';
import './App.css';
import Display from './display';
import Display2 from './display2'

function Kolokoy(props) {
  return <h1>Welcome, my name is, {props.name} and {props.message}</h1>;
}

function App() {
  return (
    <div>
     <Kolokoy name="Marco" message=" my message is Good Merning"/>
     <Display/>
     <Display2/>
    </div>
  );
}






export default App;
