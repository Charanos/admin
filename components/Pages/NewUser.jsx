import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";

const NewUser = () => {
  return (
    <div className="new-user">
      <div className="new-user-wrapper">
        <header className="head">
          <Link to="/users/">
            <span className="back">
              <RiArrowGoBackLine className="icon" /> back to users
            </span>
          </Link>
          <h1 className="heading">new user</h1>
        </header>

        <form className="myform">
          <div className="top">
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
              <label htmlFor="user"> user name </label>
              <input type="text" name="user" className="user" />
            </div>

            <div className="item">
              <label htmlFor="fname"> full names </label>
              <input type="text" name="fname" className="fname" />
            </div>

            <div className="item">
              <label htmlFor="email">email address </label>
              <input type="email" name="email" className="email" />
            </div>

            <div className="item">
              <label htmlFor="phone"> phone number</label>
              <input type="number" name="phone" className="phone" />
            </div>

            <div className="item">
              <label htmlFor="address"> address</label>
              <input type="text" name="address" className="address" />
            </div>

            <div className="item gend">
              <input type="radio" name="male" className="gender" />
              <label htmlFor="male"> male </label>
              <input type="radio" name="female" className="gender" />
              <label htmlFor="female"> female</label>
              <input type="radio" name="other" className="gender" />
              <label htmlFor="other"> other </label>
            </div>

            <button type="submit" className="update-btn">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
