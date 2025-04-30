import Account from "./components/Account";
import TransactionHistory from "./components/TransactionHistory";
import NewTransaction from "./components/NewTransaction";
import PaymentForm from "./components/PaymentForm";
import PaymentDirection from "./components/PaymentDirection";
import "./App.css";
import { useState } from "react";

function App() {
  const [showPaymentDirection, setShowPaymentDirection] = useState(false); //Display or not the direction buttons
  const [showPaymentForm, setShowPaymentForm] = useState(false); //Display or not the PaymentForm
  const [showNewTransaction, setShowNewTransaction] = useState(true); //Display or not the newTransaction button
  const [company, setCompany] = useState("Company"); //Name of the other party
  const [amount, setAmount] = useState(5.0); //Transfer amount
  const [payments, setPayment] = useState([]); //Array to store all the payment objects
  const [balance, setBalance] = useState(200); //Current balance
  const [direction, setDirection] = useState(false); //To/From user

  function handleNewPayment(companyItem, amountItem, direction) {
    setPayment((payments) => [
      { company: companyItem, amount: amountItem, direction: direction },
      ...payments, //Adds a new payment object to the array
    ]);
    if (direction === "true") {
      // what the fuck is this even
      setBalance((b) => roundDown(b + Number(amountItem), 2)); //adds to balance the transaction amount from the paymentform
    } else {
      setBalance((b) => roundDown(b - Number(amountItem), 2)); // removes from balance the transaction amount from the paymentform
    }
    setShowPaymentForm(() => false); // removes the second payment form
    setShowNewTransaction(() => true); // adds back the New Transaction button
  }

  function roundDown(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.floor(num * factor) / factor;
  }

  function handleAddPay() {
    setShowPaymentDirection(() => true); // adds the 2 direction buttons
    setShowNewTransaction(() => false); // removes the New Transaction button
  }

  function handleRemovePay() {
    setShowPaymentDirection(() => false); // removes the 2 direction buttons
    setShowPaymentForm(() => true); // adds the the payment form
  }

  function handleRemovePaymentForm() {
    setShowPaymentForm(() => false); // removes the payment form
    setShowNewTransaction(() => true); // adds back the New Transaction button
  }

  return (
    <div className="App">
      <Account
        balance={balance} /*Displays the balance, pic and welcome message*/
      />
      {showNewTransaction && (
        <NewTransaction
          onAddPay={handleAddPay} /*Displays the New Transaction button*/
        />
      )}
      {showPaymentDirection && ( //Displays 2 buttons regarding the payment direction (to/from)
        <PaymentDirection
          onRemovePay={handleRemovePay}
          setDirection={setDirection} //Sets direction (to/from)
        />
      )}
      {showPaymentForm && ( //Displays the payment form. The user inputs a the other party of
        <PaymentForm //the transaction and the amount. User also has 2 choises Add/Cancel
          company={company}
          amount={amount}
          onRemovePay={handleRemovePaymentForm}
          setCompany={setCompany}
          setAmount={setAmount}
          payments={payments}
          onNewPayment={handleNewPayment}
          direction={direction}
        />
      )}
      <TransactionHistory
        payments={payments} /*Displays the transaction history*/
      />
    </div>
  );
}

export default App;
