import React from 'react';

const monsters = [
  {
    nickname: "monster1",
    id:0
  },
  {
    nickname: "monster2",
    id:1
  },
  {
    nickname: "monster3",
    id:2
  }
];







function Monster(props){
  return <h3>{props.nickname} {props.id}</h3>
  };



function MonsterList(props){
  return(
      <ul className="list-group">
        {props.monsters.map(Monster)}
      </ul>
    );
}
 



function Monstersdata(props){
  return <h3>The monster data is {props.name} {props.id}</h3>
}

function Monsterindexlist(props){
  return <h3>The monsterindexlist has {props.nickname} </h3>;
}



class Display3 extends React.Component{
  componentWillMount(){
    this.state = {monsters};
  }



  render(){
    return(
      <div>
        <Monstersdata name="kolokoyname" id="id of 0"/>
        <Monsterindexlist nickname="thisisanickname"/>
        <Monster  />
        

        <MonsterList monsters={this.state.monsters}/>
      </div>
    );
  }
};




export default Display3;