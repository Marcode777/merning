import React from 'react';

const monsters = [
  {
    nickname: "Jersey Devil",
    type: "American",
    id:0
  },
  {
    nickname: "Kolokoy",
    type: "Philippine",
    id:1
  },
  {
    nickname: "Lochness",
    type:"Scottish",
    id:2
  }
];

const cities = [
  {
    cityname: "New York City",
    rating: "A++",
    id: 0
  },
  {
    cityname: "Chicago",
    rating: "A+",
    id: 1
  },
  {
    cityname: "Los Angeles",
    rating: "A",
    id: 2
  }
];









function Monster(props){
  return <h3> nickname: {props.nickname} type: {props.type} </h3>
  };



function MonsterList(props){
  return(
      <ul className="list-group" key={monsters.id}>
        {props.monsters.map(Monster)}
      </ul>
    );
}
 


function CreateMonster(props){

  const submit = () => {
    const nicknameInput = document.querySelector('#nickname');
    const typeInput = document.querySelector('#type');

    props.onAddMonster({
      nickname: nicknameInput.value,
      type: typeInput.value
    });

    nicknameInput.value = "";
    typeInput.value= "";
  };

  return(
    <div style={{display: 'flex'}}>
      <input id="nickname" className="form-control" placeholder="Nickname"/>
      <input id="type" className="form-control" placeholder="type"/>
      <button className="btn btn-primary" type="button" onClick={submit}>
        Add Monster
      </button>
    </div>
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
    this.state = {monsters}
  }

  handleAddMonster(newMonster){
    newMonster.id = this.state.monsters.length;

    this.setState({
      monsters: this.state.monsters.concat(newMonster)
    });
  }


  render(){
    return(
      <div>
        <Monstersdata name="kolokoyname" id="id of 0"/>
        <Monsterindexlist nickname="thisisanickname"/>
        <Monster  />
        

        <MonsterList monsters={this.state.monsters}/>
        <CreateMonster onAddMonster={this.handleAddMonster.bind(this)}/>
      </div>
    );
  }
};




export default Display3;