import React from "react";

const TransactionsWidget = () => {
  const Button = ({ type }) => {
    return <button className={"trans-btn " + type}> {type} </button>;
  };

  return (
    <div className="transWidget">
      <span className="heading">latest transactions</span>

      <table className="trans">
        <tr className="trans-tr head">
          <th className="trans-headers">customers</th>
          <th className="trans-headers">date</th>
          <th className="trans-headers">amount</th>
          <th className="trans-headers">status</th>
        </tr>

        <tr className="trans-tr">
          <td className="trans-profile">
            <img
              src="https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-image1"
              className="user-profile"
            />
            <span className="trans-uname">naomi nagata</span>
          </td>
          <td className="trans-date">
            2<sup>nd</sup> July 2021
          </td>
          <td className="trans-amount">$420.69</td>
          <td className="trans-status">
            <Button type="approved" />
          </td>
        </tr>

        <tr className="trans-tr">
          <td className="trans-profile">
            <img
              src="https://images.pexels.com/photos/4646242/pexels-photo-4646242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-image2"
              className="user-profile"
            />
            <span className="trans-uname">karama soweto</span>
          </td>
          <td className="trans-date">
            12<sup>th</sup> July 2021
          </td>
          <td className="trans-amount">$420.69</td>
          <td className="trans-status">
            <Button type="approved" />
          </td>
        </tr>

        <tr className="trans-tr">
          <td className="trans-profile">
            <img
              src="https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-image3"
              className="user-profile"
            />
            <span className="trans-uname">ashley nkirote</span>
          </td>
          <td className="trans-date">
            31<sup>nd</sup> July 2021
          </td>
          <td className="trans-amount">$6420.69</td>
          <td className="trans-status">
            <Button type="declined" />
          </td>
        </tr>

        <tr className="trans-tr">
          <td className="trans-profile">
            <img
              src="https://images.pexels.com/photos/2250276/pexels-photo-2250276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-image4"
              className="user-profile"
            />
            <span className="trans-uname">shyleen woodley</span>
          </td>
          <td className="trans-date">
            21<sup>st</sup> August 2021
          </td>
          <td className="trans-amount">$20.69</td>
          <td className="trans-status">
            <Button type="approved" />
          </td>
        </tr>

        <tr className="trans-tr">
          <td className="trans-profile">
            <img
              src="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile-image5"
              className="user-profile"
            />
            <span className="trans-uname">pop smoke</span>
          </td>
          <td className="trans-date">
            4<sup>th</sup> September 2021
          </td>
          <td className="trans-amount">$11420.69</td>
          <td className="trans-status">
            <Button type="pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TransactionsWidget;
