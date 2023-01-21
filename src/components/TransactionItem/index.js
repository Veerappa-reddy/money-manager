import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, deleteHistoryItem} = props
  const {id, title, amount, type} = appointmentDetails

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <div className="transacItem-container">
        <p className="title-css">{title}</p>
        <p className="title-css-2">{amount}</p>
        <p className="title-css-3">{type}</p>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
