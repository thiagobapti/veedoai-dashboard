import React from "react";
import { Tile } from "./tile";

interface AiInsightsProps {
  onClick: () => void;
  className?: string;
}

const AiInsights: React.FC<AiInsightsProps> = ({ className }) => {
  return (
    <Tile title="AI Insights" className={className}>
      <p>AI Insights</p>
    </Tile>
  );
};

export default AiInsights;
