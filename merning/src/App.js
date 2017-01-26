import React, { Component } from 'react';
import './App.css';
import Display from './display';

function Kolokoy(props) {
  return <h1>Welcome, my name is, {props.name} and {props.message}</h1>;
}

function App() {
  return (
    <div>
     <Kolokoy name="Marco" message=" my message is Good Merning"/>
     <Display/>
    </div>
  );
}






export default App;
