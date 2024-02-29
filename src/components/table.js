import Row from "./row";
import { data } from "./data";

export default function Table() {
  const dataShow = data.map((row, index) => (
    <Row key={index} alertData={row} />
  ));
  console.log(dataShow);
  return <div className="table-section">{dataShow}</div>;
}
