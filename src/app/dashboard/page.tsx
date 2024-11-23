import React from "react";
import Header from "../components/header";
import "./page.scss";

const block = "dashboard-page";
const Dashboard = () => {
  return (
    <div className={block}>
      <Header />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
    </div>
  );
};

export default Dashboard;
