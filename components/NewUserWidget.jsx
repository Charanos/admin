import { IoIosEye } from "react-icons/io";

const NewUserWidget = () => {
  return (
    <div className="newUserWidget">
      <span className="heading">newly joined members</span>

      <div className="user-info">
        <img
          src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="user-icon"
        />
        <div className="user-details">
          <span className="uname">ann wavinya</span>
          <span className="role">novice electrical engineer</span>
        </div>

        <span className="icon">
          <IoIosEye />
        </span>
      </div>

      <div className="user-info">
        <img
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user-info"
          className="user-icon"
        />
        <div className="user-details">
          <span className="uname">jason mason</span>
          <span className="role">junior software engineer</span>
        </div>

        <span className="icon">
          <IoIosEye />
        </span>
      </div>

      <div className="user-info">
        <img
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user-info"
          className="user-icon"
        />
        <div className="user-details">
          <span className="uname">jamilah jazel</span>
          <span className="role">senior electrical engineer</span>
        </div>

        <span className="icon">
          <IoIosEye />
        </span>
      </div>

      <div className="user-info">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user-info"
          className="user-icon"
        />
        <div className="user-details">
          <span className="uname">samile ogutu</span>
          <span className="role">novice electrical engineer</span>
        </div>

        <span className="icon">
          <IoIosEye />
        </span>
      </div>

      <div className="user-info">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user-info"
          className="user-icon"
        />
        <div className="user-details">
          <span className="uname">samile ogutu</span>
          <span className="role">novice electrical engineer</span>
        </div>

        <span className="icon">
          <IoIosEye />
        </span>
      </div>
    </div>
  );
};

export default NewUserWidget;
