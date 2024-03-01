export default function CheckBoxes() {
  return (
    <div className="check-box">
      <div className="marcket">
        <h3>Marcket Cap</h3>
        <div className="check-item">
          <input type="radio" name="micro" defaultChecked />
          <label>micro</label>
        </div>
        <div className="check-item">
          <input type="radio" name="mid" defaultChecked />
          <label>mid</label>
        </div>
        <div className="check-item">
          <input type="radio" name="large" className="active" defaultChecked />
          <label>large</label>
        </div>
      </div>
      <div className="risk-level">
        <h3>Risk Level</h3>
        <div className="check-item">
          <input type="radio" name="low-risk" defaultChecked />
          <label>Low Risk</label>
        </div>
        <div className="check-item">
          <input type="radio" name="mid-risk" className="active" defaultChecked />
          <label>Mid Risk</label>
        </div>
        <div className="check-item">
          <input type="radio" name="high-risk" defaultChecked />
          <label>High Risk</label>
        </div>
      </div>
    </div>
  );
}
