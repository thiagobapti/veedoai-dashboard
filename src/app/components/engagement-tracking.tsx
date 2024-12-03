"use client";

import React from "react";
import Tile from "./tile";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import "./engagement-tracking.scss";
import BrushChart from "./brush-chart";
interface EngagementTrackingProps {
  className?: string;
}

const block = "engagement-tracking";
const EngagementTracking: React.FC<EngagementTrackingProps> = ({
  className,
}) => {
  const [key, setKey] = React.useState(0);

  return (
    <Tile
      title="❤️ Engagement Tracking"
      className={`${block} ${className}`}
      expandable
      onExpandChange={() => setKey((prev) => prev + 1)}
    >
      <div className={`${block}__inner`}>
        <ParentSize debounceTime={10} key={key}>
          {({ width, height }) => <BrushChart width={width} height={height} />}
        </ParentSize>
      </div>
    </Tile>
  );
};

export default EngagementTracking;
