import photo from "./discord-pic.jpg";
export default function Account({ balance }) {
  const name = "Dani";
  return (
    <div className="container">
      <h1 className="padding-top">Welcome {name}</h1>
      <img src={photo} alt={"You"} className="main-pic" />
      <h1 className="padding-top">Balance</h1>
      <h1 className="padding-top">{balance}$</h1>
      <h1 className="transaction-title padding-top">Transactions</h1>
    </div>
  );
}
