import React from "react";
import Tile from "./tile";
import "./ai-insights.scss";
import insights from "../data/insights";
interface AiInsightsProps {
  onClick: () => void;
  className?: string;
}
const root = "ai-insights";
const AiInsights: React.FC<AiInsightsProps> = ({ className }) => {
  return (
    <Tile title="AI Insights" className={`${root} ${className}`} expandable>
      <div className={`${root}__inner`}>
        {insights.map((insight) => (
          <div className={`${root}__insight-card`} key={insight.title}>
            {insight.title}
          </div>
        ))}
      </div>
    </Tile>
  );
};

export default AiInsights;
