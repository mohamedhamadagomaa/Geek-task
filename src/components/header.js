import NotiIcon from "./notiIcon";
import SearchIcon from "./searchIcon";

export default function Header() {
  return (
    <div className="header">
      <h1>ALERTS</h1>
      <div className="search-box" >
      <input type="text" placeholder="Search By ..."/>
        <SearchIcon/>

      </div>
      <NotiIcon />
    </div>
  );
}
