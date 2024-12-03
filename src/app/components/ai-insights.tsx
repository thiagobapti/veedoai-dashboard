import React from "react";
import Tile from "./tile";
import "./ai-insights.scss";
import insights from "../data/insights";
import {
  EyeIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

interface AiInsightsProps {
  onClick: () => void;
  className?: string;
}
const root = "ai-insights";
const AiInsights: React.FC<AiInsightsProps> = ({ className }) => {
  return (
    <Tile title="⚡️ AI Insights" className={`${root} ${className}`} expandable>
      <div className={`${root}__inner`}>
        {insights.map((insight) => (
          <div className={`${root}__insight-card`} key={insight.title}>
            <div className={`${root}__insight-card-title`}>
              <div
                className={`${root}__insight-card-title-icon`}
                title={insight.type}
              >
                {insight.type === "engagement insight" && (
                  <HeartIcon color="#ff8b8b" />
                )}
                {insight.type === "content optimization insight" && (
                  <TvIcon color="#2c9cef" />
                )}
                {insight.type === "platforms insight" && (
                  <GlobeAltIcon color="#93ff94" />
                )}
              </div>
              {insight.title}
              {insight.new && (
                <div className={`${root}__insight-card-title-icon-new`}>
                  new
                </div>
              )}
            </div>
            <div className={`${root}__insight-card-description`}>
              {insight.description.map((description) => (
                <div
                  key={description}
                  className={`${root}__insight-card-description-item`}
                >
                  {description}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
};

export default AiInsights;
