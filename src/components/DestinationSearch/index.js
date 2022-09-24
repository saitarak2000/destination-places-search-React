import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputvalue: ''}

  changeSearchInput = event => {
    const {inputvalue} = this.state
    this.setState({inputvalue: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {inputvalue} = this.state
    const filtereddestinationLists = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(inputvalue),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <form className="searchinput">
          <input
            type="Search"
            onChange={this.changeSearchInput}
            value={inputvalue}
            placeholder="search"
          />
          <img
            className="searchicon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </form>
        <ul className="destinationItems">
          {filtereddestinationLists.map(eachitem => (
            <DestinationItem destinationitem={eachitem} key={eachitem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
