import Aside from "./components/navbar-aside";
import Filter from "./components/filter";
import MidSection from "./components/mid-section";

export default function App() {
  return (
    <div className="container">
      <Aside />
      <div className="aside-btn">ASide</div>
      <MidSection />
      <div className="filter-btn">Filter</div>
      <Filter />
    </div>
  );
}
