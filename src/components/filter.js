import FilterApplied from "./filter-applies";
import Stock from "./filter-stock";
import ApplyBtn from "./apply-btn";
export default function Filter() {  
  return (
    <div className="filter">
      <h1>Filters</h1>
      <FilterApplied/>
      <Stock/>
      <ApplyBtn/>
      
    </div>
  );
}
