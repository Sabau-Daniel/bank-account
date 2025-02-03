export default function NewTransaction({ onAddPay }) {
  return (
    <div className="container">
      <button
        className="btn"
        onClick={
          onAddPay /*removes the new transaction btn and adds the 2 direction btns */
        }
      >
        New Transaction
      </button>
    </div>
  );
}
