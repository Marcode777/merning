import React from 'react';

function Monsterlist(props){
  return <h3>The Monsterlist contains {props.list}</h3>;
}

function Display2(){
  return(
  <div>
    <Monsterlist list="gaga monster"/>
    <Monsterlist list="katy perry monster"/>
    <Monsterlist list="kolokoy monster"/>
  </div>
  )
}

export default Display2;