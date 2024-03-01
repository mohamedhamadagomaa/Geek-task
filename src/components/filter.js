import FilterApplied from "./filter-applies";
import Stock from "./filter-stock";
import ApplyBtn from "./apply-btn";
import { useState } from "react"
export default function Filter() {
  const[filterOpen,setFilter] = useState(false);

  return (
    <div className={`filter ${filterOpen ? "open" : ""}`}>
      <h1>Filters</h1>
      <div className="filter-btn" onClick={() => setFilter(!filterOpen)}>
        Filter
      </div>
      <FilterApplied />
      <Stock />
      <ApplyBtn />
    </div>
  );
}
