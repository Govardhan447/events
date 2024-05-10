import './index.css'

const registrationStatusList = {
  yetToRegistration: 'YET_TO_REGISTER',
  registred: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatusDetails} = props
  const {registrationStatus} = registrationStatusDetails
  console.log(registrationStatus)

  const getRegistrationStatus = () => {
    switch (registrationStatus) {
      case registrationStatusList.yetToRegistration:
        return (
          <div className="bg-container">
            <img
              className="register-img"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
              alt="yet to register"
            />
            <p className="paragraph">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form
            </p>
            <button className="button" type="button">
              Register Here
            </button>
          </div>
        )

      case registrationStatusList.registred:
        console.log(registrationStatusList.registred === registrationStatus)
        return (
          <div className="bg-container">
            <img
              className="register-img"
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
            />
            <h1 className="registred-event">
              You have already registered for the event
            </h1>
          </div>
        )

      case registrationStatusList.registrationsClosed:
        return (
          <div className="bg-container">
            <img
              className="register-img"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
            />
            <h1 className="registred-event">Registrations Are Closed Now!</h1>
            <p className="paragraph">
              Stay tuned. We will reopen registrations soon
            </p>
          </div>
        )

      default:
        return (
          <p className="registred-event">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return getRegistrationStatus()
}
export default ActiveEventRegistrationDetails
