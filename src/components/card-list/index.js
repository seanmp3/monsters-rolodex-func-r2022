import Card from "../card/index"
import "./index.css"

const CardList = (props) => {
  const {monsters} = props
  
  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card monster={monster}/>
      })}
    </div>
  )
}

// Class Component Version
//
// class CardList extends Component{
//   render(){
//     const {monsters} = this.props
//     return (
//       <div className="card-list">
//         {monsters.map(monster => {
//           const {name, email, id} = monster
//           return <Card monster={monster}/>
//         })}
//       </div>
//     )
//   }
// }

export default CardList
