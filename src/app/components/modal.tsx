import React from "react";
import "./modal.scss";
import cn from "classnames";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  footerActions?: { label: string; handler: () => void }[];
  onClose: () => void;
  expanded?: boolean;
}
export const block = "modal";
const Modal: React.FC<ModalProps> = ({
  children,
  className,
  footerActions,
  onClose,
  expanded,
}) => {
  return (
    <div className={cn(`${block}`, className, {})}>
      <div
        className={cn(`${block}__panel`, {
          [`${block}__panel--expanded`]: expanded,
        })}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
      {footerActions && footerActions.length > 0 && (
        <div className={`${block}__footer`}>
          {footerActions?.map((action) => (
            <button
              key={action.label}
              onClick={action.handler}
              className={`${block}__footer-cta`}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modal;
