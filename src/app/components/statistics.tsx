import React from "react";
import Tile from "./tile";
import "./statistics.scss";

interface StatisticsProps {
  onClick: () => void;
  className?: string;
}

const block = "statistics";
const Statistics: React.FC<StatisticsProps> = ({ className }) => {
  return (
    <Tile className={`${block} ${className}`} expandable>
      <div className={`${block}__inner`}></div>
    </Tile>
  );
};

export default Statistics;
