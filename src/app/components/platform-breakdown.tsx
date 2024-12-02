"use client";

import React from "react";
import Tile from "./tile";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Example from "./pie-chart";

interface PlatformBreakdownProps {
  className?: string;
}

const PlatformBreakdown: React.FC<PlatformBreakdownProps> = ({ className }) => {
  return (
    <Tile title="Platform Breakdown" className={className} expandable>
      Hi
      {/* <ParentSize>
        {({ width, height }) => <Example width={width} height={height} />}
      </ParentSize> */}
    </Tile>
  );
};

export default PlatformBreakdown;
