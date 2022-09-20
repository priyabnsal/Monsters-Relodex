import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/card/search-box.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  onSearchChange = (event) =>{
    const searchField = event.target.value.toLowerCase();
      this.setState(()=>{
        return {searchField}
      })
  }
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filterMonster = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField);
      });
    return (
      <div className="App">
     <SearchBox onSearchChange={onSearchChange}/>
     <CardList monsters = {filterMonster}/>
      </div>
    )
  }
}

export default App
