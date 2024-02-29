export default function Row({ alertData }) {
  const { icon1, title, icon2, num, icon3, perc, icon4, riskLevel } = alertData;

  return (
    <div className="row">
      <div className="items-row">{icon1}</div>
      <div className="items-row">{title}</div>
      <div className="items-row">{icon2}</div>
      <div className="items-row">{num}</div>
      <div className="items-row">{icon3}</div>
      <div className={`${riskLevel === "High Risk" ? "green" : "orange"}`}>
        {perc}
      </div>
      <div className="items-row">{icon4}</div>
      <div>{riskLevel}</div>
    </div>
  );
}
