import React from "react";
import { Tile } from "./tile";

interface PlatformBreakdownProps {
  onClick: () => void;
  className?: string;
}

const PlatformBreakdown: React.FC<PlatformBreakdownProps> = ({ className }) => {
  return (
    <Tile title="Platform Breakdown" className={className}>
      <p>Platform Breakdown</p>
    </Tile>
  );
};

export default PlatformBreakdown;
