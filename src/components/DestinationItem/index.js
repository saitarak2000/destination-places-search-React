import './index.css'

const DestinationItem = props => {
  const {destinationitem} = props
  const {name, imgUrl} = destinationitem
  return (
    <li className="destination-container">
      <img src={imgUrl} alt={name} />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
