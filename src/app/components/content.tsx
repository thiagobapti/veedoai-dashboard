import React from "react";
import { Tile } from "./tile";

interface ContentProps {
  onClick: () => void;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className }) => {
  return (
    <Tile title="Content" className={className}>
      <p>Content</p>
    </Tile>
  );
};

export default Content;
