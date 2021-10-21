import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { GiSuitcase } from "react-icons/gi";
import { IoIosJournal } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { GrTransaction } from "react-icons/gr";
import { MdBusinessCenter } from "react-icons/md";
import {
  IoAnalytics,
  IoMailOpenOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__menu-heading">dashboard</h3>
          <ul className="sidebar__menu-list">
            <Link to="/">
              <li className="list-item active">
                home <GoHome className="icon" />
              </li>
            </Link>

            <li className="list-item">
              analytics <IoAnalytics className="icon" />
            </li>

            <li className="list-item">
              sales <IoStatsChartOutline className="icon" />
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__menu-heading">quick menu</h3>
          <ul className="sidebar__menu-list">
            <Link to="/users/">
              <li className="list-item ">
                users <BiUserCircle className="icon" />
              </li>
            </Link>

            <Link to="/products">
              <li className="list-item">
                products <MdBusinessCenter className="icon" />
              </li>
            </Link>

            <li className="list-item">
              transactions <GrTransaction className="icon" />
            </li>

            <li className="list-item">
              reports <IoIosJournal className="icon" />
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__menu-heading">notifications</h3>
          <ul className="sidebar__menu-list">
            <li className="list-item ">
              mail <IoMailOpenOutline className="icon" />
            </li>

            <li className="list-item">
              feedback <VscFeedback className="icon" />
            </li>

            <li className="list-item">
              messages <TiMessages className="icon" />
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__menu-heading">inventory</h3>
          <ul className="sidebar__menu-list">
            <li className="list-item ">
              manage <GiSuitcase className="icon" />
            </li>

            <li className="list-item">
              analytics <IoAnalytics className="icon" />
            </li>

            <li className="list-item">
              reports <IoIosJournal className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
