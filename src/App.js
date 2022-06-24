import {useEffect, useState} from "react"

import CardList from "./components/card-list/index"
import SearchBox from "./components/search-box/index"

import "./App.css"

const App = () => {

  const [searchField, setSearchField] = useState("")
  const [monsters, setmonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setmonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder={"search monsters"} 
        className={"monsters-search-box"}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// Class Component Version
//
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ""
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => {
//         this.setState(() => {
//           return {monsters: users}
//         })
//       })
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return {searchField}
//     })
//   }

//   render(){
//     const {monsters, searchField} = this.state
//     const {onSearchChange} = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder={"search monsters"} 
//           className={"monsters-search-box"}
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     )
//   }
// }

export default App
