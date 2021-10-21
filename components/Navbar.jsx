import { BiUserCircle } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="left">
          <span className="logo">sov admin</span>
        </div>

        <div className="right">
          <div className="icon-group">
            <IoNotificationsOutline className="icon" />
            <span className="notifications"> {3} </span>
          </div>

          <div className="icon-group">
            <AiOutlineSetting className="icon" />
          </div>

          <div className="icon-group">
            <BiUserCircle className="user-icon icon" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
