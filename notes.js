// From the beginning. 
// include CDNs from unpkg as scripts in the head
// bare minimums are the react, react-dom and babel-core cdns
// the whole React Application will be placed in a div that you give an id to
// keep in mind that you are writing in JSX, text babel, so, if writing directly to html, put whatever in between <script type="text/babel"></script> tags

// or via create-react-app
//mkdir whatevername 
// cd into whatevername
// npm init
// npm install create-react-app --save
// create-react-app whatevername
// cd into whatevername that was just created

// *****************
//import React, { Component } from 'react';
// import './App.css'; 

// function Kolokoy(props) {     // so in this case the Kolokoy function will accept props and then return Welcome, and then whatever props
//   return <h1>Welcome, {props.name} {props.message}</h1>;
// }

// function App() { // in this case, the main function is App, it will produce the Kolokoy function, and then whatever is input for the name and message props will be produced as along with the Kolokoy function
//   return (
//     <div>
//      <Kolokoy name="Marco" message=" my message is Kokolokolokoyz"/>  
//     </div>
//   );
// }


// export default App;
// *****************
// **********
// also when using simple functions, exact syntax is important, e.g., use 
// function Say(props){
//     return <h3>I say that {props.says}</h3>;
//   }

//   instead of

// function Say(props){
//     return (
//     <h3>I say that {props.says}
//     </h3>;
//     )
//   }

// because remember, this is JSX, which is a derivative of JavaScript, which is more strict, but not exactly JavaScript which is less strict on syntax
// **********


// <!--* remember that React is in JSX, it uses JSX so that it's easier to understand at a high-level (meaning, it's easier to understand because it looks like HTML), JSX transpiles that easier-looking syntax back in to JavaScript. Remember that this means the entire React application is just JavaScript* 
//*******IT'S ALL ABOUT COMPONENTS, STATES AND PROPS, and remember that a render can only essentially display 1 parent element, if we want to render multiple parent elements, they have to be wrapped in a div. Remember to use ".bind(this)" when passing functions or methods around. Whenever we're binding a value, we'll also set up a change listener for that, so that it actually changes when the value changes. Also, css-like design elements with hyphens are camelCase in React JSX and should be made into a component, and then implemented, in order for them to function.*******
// ******FLUX is a pattern. CADS, Components, Actions, Dispatcher, Stores and it cycles again.******
// ******Remember, when listening to events on mount, to also unmount them to prevent memory leaks.******
// ***** React knows how to handle functions and classes. The simplest components in react are just like functions, 
// but the reason you'd want to use class is that it has access to component life cycles.*****
// *****props are actually just JavaScript objects that are converted by Babel and written in JSX, and are given as arguments, e.g. function MonsterList(props), so that way we have, available, props.monsters*****
// ***** also, the curly braces { }, in JSX means, between these curly braces, perform JavaScript. If you remove the curly braces, they would just get rendered straight as text.*****
// ***** componentWillMount() life cycle hook initializes the state of our app at the beginning*****




// From the start
// componentWillMount( ) life cycle hook gets called when we initialize the app, and it sets the initial state of our app::: this.state = {monsters}, this lives at the top-level
// we have our array of monsters ::: monsters: [{whatevermonsters with whatever key:value pairs}]
// this array of monsters is passed into the MonsterList component ::: <MonsterList monsters={this.state.monsters}/> 
// now the MonsterList component has an array of monsters and it maps through each element of that array via
//       function MonsterList(props){
//         return(
//             <ul className="list-group" key={monsters.id}>
//               {props.monsters.map(Monster)}
//             </ul>
//           );
//       }
// so for each element of that array, it passes each element through the Monster component above
// so the first time, the first iteration of map is going to pass the first element of the monsters array to the Monster 

// and so now that element (or object in this case, because it has key-value pairs), will have specific props (key:value pairs) extracted from it as in the following
//      function Monster(props){
//        return <h3>{props.nickname} {props.type} {props.id} </h3>
//       };
//
//in turn those specific props will be returned within the tags to be displayed, as in the case of the first element, nickname Jersey Devil and type American will be displayed
//
//

//THE WHOLE THING FINISHES AT 45:07



