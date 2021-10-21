import React from "react";
import Chart from "../Chart";
import Featured from "../Featured";
import { active_users_data } from "../../data";
import NewUserWidget from "../NewUserWidget";
import TransactionsWidget from "../TransactionsWidget";

const Home = () => {
  return (
    <div className="home">
      <div className=" home__wrapper">
        <Featured />
        <Chart
          grid
          dataKey="active_users"
          heading="User Analytics"
          data={active_users_data}
        />
        <div className="widgets">
          <NewUserWidget />
          <TransactionsWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;
