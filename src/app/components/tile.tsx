import { ReactNode } from "react";
import "./tile.scss";

interface TileProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const block = "tile";
export function Tile({ children, title, className }: TileProps) {
  return (
    <div className={`${block} ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
