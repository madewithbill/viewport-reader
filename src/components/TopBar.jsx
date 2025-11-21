import ModeToggle from "./ModeToggle";

export default function TopBar({ darkMode, onClick }) {
  return (
    <div className="top-bar">
      <div className="tool-detail">Tool 002: Get Viewport Dimensions</div>
      <ModeToggle darkMode={darkMode} onClick={onClick} />
    </div>
  );
}
