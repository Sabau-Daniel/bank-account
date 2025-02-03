export default function TransactionHistory({ payments }) {
  //Iterates through the array and renders all the payments
  return (
    <div className="container">
      {payments.map((payments) => (
        <Transaction
          companyName={payments.company}
          amount={payments.amount}
          direction={payments.direction}
        />
      ))}
    </div>
  );
}

function Transaction({ companyName, amount, direction }) {
  //Creates a component with the specified comapany name and amount
  return (
    <div className="transaction">
      <p className="company-name">{companyName}</p>
      <p className="amount">
        {direction === "true" ? "+" : "-"}
        {amount} $
      </p>
    </div>
  );
}
