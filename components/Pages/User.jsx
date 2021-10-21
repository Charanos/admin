import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { FaAddressBook } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdEmail, MdFileUpload } from "react-icons/md";
import { RiArrowGoBackLine, RiShieldUserFill } from "react-icons/ri";

const User = () => {
  return (
    <div className="user">
      <div className="user__wrapper">
        <header className="user-head">
          <Link to="/users/">
            <span className="back">
              <RiArrowGoBackLine className="icon" /> back to members
            </span>
          </Link>
          <Link to="/newUser/">
            <button className="create-btn"> create </button>
          </Link>
        </header>

        <div className="user-container">
          <div className="showcase">
            <div className="top">
              <img
                src="https://images.pexels.com/photos/5088450/pexels-photo-5088450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="title">
                <span className="username">dennis munge</span>
                <span className="role">software engineer</span>
              </div>
            </div>

            <div className="bottom">
              <span className="title"> account details </span>
              <div className="info">
                <RiShieldUserFill className="icon" />
                <span className="details">denmunge960</span>
              </div>
              <div className="info">
                <FaBirthdayCake className="icon" />
                <span className="details">10.10.1999</span>
              </div>
              <div className="info">
                <MdContactPhone className="icon" />
                <span className="details">+254 748 825157</span>
              </div>
              <div className="info">
                <MdEmail className="icon" />
                <span className="details">denmunge960@test.com</span>
              </div>
              <div className="info">
                <FaAddressBook className="icon" />
                <span className="details upper">nairobi | kenya</span>
              </div>
            </div>
          </div>

          {/* update  */}
          <div className="update">
            <span className="title">edit</span>

            <form className="myform">
              <div className="left">
                <div className="upload">
                  <img
                    src="https://images.pexels.com/photos/5088450/pexels-photo-5088450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="image"
                  />

                  <label htmlFor="file">
                    <FiUpload classname="icon" />
                  </label>
                  <input id="file" type="file" />
                </div>

                <div className="item">
                  <label htmlFor="uname"> user name </label>
                  <input type="text" name="uname" className="uname" />
                </div>

                <div className="item">
                  <label htmlFor="fname"> full names </label>
                  <input type="text" name="fname" className="fname" />
                </div>

                <div className="item">
                  <label htmlFor="email"> email address </label>
                  <input type="email" name="email" className="email" />
                </div>

                <div className="item">
                  <label htmlFor="phone"> phone number </label>
                  <input type="text" name="phone" className="phone" />
                </div>

                <div className="item">
                  <label htmlFor="address"> home address </label>
                  <input type="text" name="address" className="address" />
                </div>

                <button type="submit" className="update-btn">
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
