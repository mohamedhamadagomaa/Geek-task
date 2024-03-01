import Aside from "./components/navbar-aside";
import Filter from "./components/filter";
import {useState} from 'react';
import MidSection from "./components/mid-section";

export default function App() {
  const[asideOpen,setAside] = useState(false);
 
  return (
    <div className="container">
      <Aside asideOpen={asideOpen} />
      <div className="aside-btn" onClick={() =>setAside(!asideOpen)}>ASide</div>
      <MidSection />
      
      <Filter  />
    </div>
  );
}
