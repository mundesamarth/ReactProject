import { Component } from "react";
import { useState ,useEffect } from "react";

import "./App.css";
import SearchBox from "./component/searchFeild/search-feild.component";
import CardList from "./component/card-list/card-list.component";

const App = () => {
  const [searchFeild, setSearchFeild] = useState(" ");
  const [monsters, setMonsters] = useState([]);
  const [filterdMonster, setFilterdMonster] = useState(monsters);


  const onSearchF = (event) => {
    const searchFeildString = event.target.value.toLowerCase();
    setSearchFeild(searchFeildString);
  };

  useEffect(()=>{
    const newFilterdMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });
    setFilterdMonster(newFilterdMonster);
  },[monsters,searchFeild])

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
          .then((resp) => resp.json())
          .then((users) =>setMonsters(users)); 
  } , [])

  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        placeholder="search monster"
        onChange={onSearchF}
      />
      <CardList monsters={filterdMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFeild: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => resp.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchF = (event) => {
//     const searchFeild = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFeild };
//     });
//   };

//   // rendering of elements
//   render() {
//     const { monsters, searchFeild } = this.state;
//     const { onSearchF } = this;

//     const filterdMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFeild);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monster Rolodex</h1>

//         <SearchBox
//           className="monster-search-box"
//           placeholder="search monster"
//           onChange={onSearchF}
//         />
//         <CardList monsters={filterdMonster} />
//       </div>
//     );
//   }
// }

export default App;
