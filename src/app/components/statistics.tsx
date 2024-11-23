import React from "react";
import { Tile } from "./tile";

interface StatisticsProps {
  onClick: () => void;
  className?: string;
}

const Statistics: React.FC<StatisticsProps> = ({ className }) => {
  return (
    <Tile title="Statistics" className={className}>
      <p>Statistics</p>
    </Tile>
  );
};

export default Statistics;
