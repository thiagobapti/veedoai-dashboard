import { ReactNode } from "react";
import "./tile.scss";

interface TileProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const block = "tile";
const Tile: React.FC<TileProps> = ({ children, title, className }) => {
  return (
    <div className={`${block} ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Tile;
