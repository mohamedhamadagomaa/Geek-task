import Industry from "./industry";
import SearchIcon from "./searchIcon";
import CheckBoxes from "./checked";
import FooterBtns from "./footer-btns";
export default function Stock() {
  return (
    <div className="stock">
      <h2>Stock</h2>
      <div className="search-section">
        <input type="text" placeholder=" $ Ticker" />
        <SearchIcon />
      </div>
      <Industry/>
      <CheckBoxes/>
      <FooterBtns/>

    </div>
  );
}
