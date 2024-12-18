"use client";

import React from "react";
import Tile from "./tile";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Example from "./pie-chart";
import "./platform-breakdown.scss";
interface PlatformBreakdownProps {
  className?: string;
}

const block = "platform-breakdown";
const PlatformBreakdown: React.FC<PlatformBreakdownProps> = ({ className }) => {
  const [key, setKey] = React.useState(0);

  return (
    <Tile
      title="🌎 Platform Breakdown"
      className={`${block} ${className}`}
      expandable
      onExpandChange={() => setKey((prev) => prev + 1)}
    >
      <div className={`${block}__inner`}>
        <ParentSize debounceTime={10} key={key}>
          {({ width, height }) => <Example width={width} height={height} />}
        </ParentSize>
      </div>
    </Tile>
  );
};

export default PlatformBreakdown;
