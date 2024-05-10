import './index.css'

const EventItem = props => {
  const {eventDetails, selectedEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const onclickEvent = () => {
    selectedEvent(id)
  }

  return (
    <li>
      <button className="list-container" onClick={onclickEvent} type="button">
        <img className="img-logo" src={imageUrl} alt="event" key={id} />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
