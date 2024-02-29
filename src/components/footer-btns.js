export default function FooterBtns() {
  return (
    <div className="footer-btns">
      <div className="strategy">
        <h2>Strategy</h2>
        <button>Big Optiob Buys</button>
        <button className="active">Merger Arbitrage</button>
        <button>short Reports</button>
      </div>
      <div className="asset">
        <h2>Asset</h2>
        <button>Stocks</button>
        <button className="active">Options</button>
        <button>Futures</button>
      </div>
    </div>
  );
}
