import './index.css'

const MoneyDetails = props => {
  const {amount} = props

  return (
    <div className="money-details-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {amount}
          </p>
        </div>
      </div>
      <div className="your-balance-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs 0
          </p>
        </div>
      </div>
      <div className="your-balance-container-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs 0
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
