import React from "react";
import Header from "../components/header";
import "./page.scss";
import PlatformBreakdown from "../components/platform-breakdown";
import Statistics from "../components/statistics";
import Content from "../components/content";
import AiInsights from "../components/ai-insights";

const block = "dashboard-page";
const Dashboard = () => {
  return (
    <div className={block}>
      <Header />
      <div className={`${block}__container container`}>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard page!</p>
        <div className={`${block}__tiles`}>
          <PlatformBreakdown onClick={() => {}} className={`${block}__tile`} />
          <Statistics onClick={() => {}} className={`${block}__tile`} />
          <Content onClick={() => {}} className={`${block}__tile`} />
          <AiInsights onClick={() => {}} className={`${block}__tile`} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
