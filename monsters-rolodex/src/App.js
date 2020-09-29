import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { Searchbox } from './components/searchbox/searchbox';

class App extends React.Component {

  state = {
    monsters: [],
    searchParameter: "",
  }

  setSearchParameter = (evt) => {
    this.setState({ searchParameter: evt.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  render() {
    const monsters = this.state.monsters.filter(item => item.name.toLowerCase().includes(this.state.searchParameter.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox search={this.state.searchParameter} placeholder="Search Monsters" setSearch={this.setSearchParameter}/>
        <CardList data={monsters} />
      </div>
    );
  }
}

export default App;
