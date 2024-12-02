import { ReactNode, useState } from "react";
import "./tile.scss";
import cn from "classnames";

interface TileProps {
  children: ReactNode;
  title?: string;
  className?: string;
  expandable?: boolean;
}

export const block = "tile";
const Tile: React.FC<TileProps> = ({
  children,
  title,
  className,
  expandable,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={cn(block, className, { [`${block}--expanded`]: expanded })}>
      {expandable && (
        <button
          className={`${block}__expand`}
          onClick={() => setExpanded(!expanded)}
        ></button>
      )}
      {title && <div>{title}</div>}
      {children}
    </div>
  );
};

export default Tile;
