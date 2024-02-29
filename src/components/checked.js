export default function CheckBoxes() {
  return (
    <div className="check-box">
      <div className="marcket">
        <h3>Marcket Cap</h3>
        <div className="check-item">
          <input type="radio" name="micro" checked />
          <label>micro</label>
        </div>
        <div className="check-item">
          <input type="radio" name="mid" checked />
          <label>mid</label>
        </div>
        <div className="check-item">
          <input type="radio" name="large" className="active" checked />
          <label>large</label>
        </div>
      </div>
      <div className="risk-level">
        <h3>Risk Level</h3>
        <div className="check-item">
          <input type="radio" name="low-risk" checked />
          <label>Low Risk</label>
        </div>
        <div className="check-item">
          <input type="radio" name="mid-risk" className="active" checked />
          <label>Mid Risk</label>
        </div>
        <div className="check-item">
          <input type="radio" name="high-risk" checked />
          <label>High Risk</label>
        </div>
      </div>
    </div>
  );
}
