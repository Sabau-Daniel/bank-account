export default function PaymentForm({
  company,
  amount,
  onRemovePay, // removes the form and ands back the new transaction btn
  setAmount, //sets the amount
  setCompany, //sets the company name
  onNewPayment, //adds the new payment to the list and changes balance
  direction,
}) {
  function roundDown(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.floor(num * factor) / factor;
  }

  return (
    <div className="payment-form">
      <div className="dual">
        <label>Company Name</label>
        <input
          value={company}
          type="text"
          className="btn"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="dual">
        <label>Amount</label>
        <input
          value={amount}
          type="number"
          className="btn"
          onChange={(e) => setAmount(roundDown(e.target.value, 2))} // to add min value 0
        />
      </div>
      <div className="dual">
        <button className="btn" onClick={onRemovePay}>
          Cancel
        </button>
        <button
          className="btn"
          onClick={() => onNewPayment(company, amount, direction)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
