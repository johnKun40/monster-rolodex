import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './card-list/card-list.component';
import {SearchBox} from './search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      //String: 'Hello Umma'
      // monsters: [ comment- Hard coding data inside react
      //   {
      //     name: 'Umma'
      //   },
      //   {
      //     name: 'Dracula'
      //   },
      //   {
      //     name: 'John'
      //   },
      //   {
      //     name: 'Zombie'
      //   }
      // ]
      monsters: []
    }//https://jsonplaceholder.typicode.com/users
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())
    .then(users => this.setState({monsters: users}))
    //fetch gives a promise that returns a respond. Fetch is use to consume an API.

  }

  render(){
    const {monsters, searchField} = this.state
    const filterMonsters = monsters.filter(monster => monster.name.includes(searchField)); 
    return (
      <div className="App">
        {/* <h1>{this.state.String}</h1>
        <button onClick={ () => this.setState({String: 'How you doing'})}>Click me</button> */}
        {/* <input type="search" placeholder="Search for monster" onChange={e => this.setState({searchField: e.target.value})} /> */}
        <SearchBox placeholder={'Search Monster'} handleChange = {e => this.setState({searchField: e.target.value})} />
        <CardList monsters = {filterMonsters}></CardList>
      </div>
    );
  }
}


export default App;

//{this.state.monsters.map(monster => (<h2 key={monster.id}>{monster.name}</h2>))}