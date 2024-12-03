import { ReactNode, useState } from "react";
import "./tile.scss";
import cn from "classnames";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface TileProps {
  children: ReactNode;
  title?: string;
  className?: string;
  expandable?: boolean;
  onExpandChange?: () => void;
}

export const block = "tile";
const Tile: React.FC<TileProps> = ({
  children,
  title,
  className,
  expandable,
  onExpandChange,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={cn(block, className, { [`${block}--expanded`]: expanded })}>
      {expandable && (
        <button
          className={`${block}__expand`}
          onClick={() => {
            setExpanded(!expanded);
            onExpandChange?.();
          }}
          title={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? (
            <XMarkIcon className={`${block}__expand-icon`} color="#fff" />
          ) : (
            <PlusIcon className={`${block}__expand-icon`} color="#fff" />
          )}
        </button>
      )}
      {title && <div className={`${block}__title`}>{title}</div>}
      {children}
    </div>
  );
};

export default Tile;
