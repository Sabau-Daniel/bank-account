export default function PaymentDirection({ onRemovePay, setDirection }) {
  function handlePaymentDirection(e) {
    onRemovePay();
    setDirection(e.target.value);
    //sets the to/from direction of the payment then removes the btns and shows the form
  }
  return (
    <div className="direction">
      <button
        className="direction-btn"
        value={false}
        onClick={handlePaymentDirection}
      >
        I want to send money
      </button>
      <button
        className="direction-btn"
        value={true}
        onClick={handlePaymentDirection}
      >
        Someone wants to send me money
      </button>
    </div>
  );
}
