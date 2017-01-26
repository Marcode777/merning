import React from 'react';



 function Say(props){
    return <h3>I say that {props.says}</h3>;
  }

  function Display(){
    return(
      <div>
        <Say says="I like to say what I say"/>
      </div>
    );
  }

export default Display;
