import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
//import ReactDOM from 'react-dom'aloush samir;
//import logo from './logo.svg' bravooooo;
import './App.css';
import './components/search-box/search-box.component.css'
import { SearchBox } from './components/search-box/search-box.component';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (<button onClick={shoot}>Take the shot!</button>)

}




export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredmonster = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));





    return (



      <div className='App'>
        <div><Football /></div>
        <h1> Monesters Relodex</h1>


        <SearchBox placeholder='search monsters' handleChange ={e =>  this.setState({ searchField: e.target.value })}>
      
        </SearchBox>


        <CardList monsters={filteredmonster} >

        </CardList >

      </div>


    );
  }
};







//export default App;




