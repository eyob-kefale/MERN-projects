import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],

    }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users
          }
        },
          () => { console.log(this.state) }

        )
      )
  }

  onSearchChange = (event) => {
    // console.log(event.target.value.toLocaleLowerCase())
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodox</h1>
        <SearchBox
          onSearchChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />

        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
