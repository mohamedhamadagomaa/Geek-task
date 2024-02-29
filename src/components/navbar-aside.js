import Avatar from "./avatar-circle";
import Icons from "./icons";

export default function Aside() {
  return (
    <div className="aside">
      <img
        src={require("./Assets/street suite logo-04.png")}
        alt="logo"
        style={{
          width: "52px",
          height: "23px",
          position: "relative",
          top: "29px",
          left: "12px",
        }}
      />

      <div>
        <Icons />
      </div>
      <div className="avatar"><Avatar/></div>
    </div>
  );
}
