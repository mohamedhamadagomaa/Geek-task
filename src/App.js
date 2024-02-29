import Aside from "./components/navbar-aside";
import Filter from "./components/filter";
import MidSection from "./components/mid-section";

export default function App() {
  return (
    <div className="container">
      <Aside />
      <MidSection />
      <Filter />
    </div>
  );
}
