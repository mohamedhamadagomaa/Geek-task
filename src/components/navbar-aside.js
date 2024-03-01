import Avatar from "./avatar-circle";
import Icons from "./icons";

export default function Aside({ asideOpen }) {
  return (
    <div className={`aside ${asideOpen ? "open" : ""}`}>
      <img
        className="image"
        src={require("./Assets/street suite logo-04.png")}
        alt="logo"
      />

      <div>
        <Icons />
      </div>
      <div className="avatar">
        <Avatar />
      </div>
    </div>
  );
}
