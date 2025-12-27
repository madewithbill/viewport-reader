import type { ReactEventHandler } from "react";
import ModeToggle from "./ModeToggle";

export type darkModeProps = {
  darkMode: boolean;
  onClick: ReactEventHandler;
};

export default function TopBar({ darkMode, onClick }: darkModeProps) {
  return (
    <div className="top-bar">
      <div className="tool-detail">Tool 002: Get Viewport Dimensions</div>
      <ModeToggle darkMode={darkMode} onClick={onClick} />
    </div>
  );
}
