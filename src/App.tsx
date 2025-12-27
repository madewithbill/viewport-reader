import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import CreditTag from "./components/CreditTag";
import ViewportNum from "./components/ViewportNum";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const windowTarget = e.currentTarget as Window;
      setViewport({
        width: windowTarget.innerWidth,
        height: windowTarget.innerHeight,
      });
    });
  }, []);

  function toggleMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <TopBar darkMode={darkMode} onClick={toggleMode} />
      <main className="container">
        <h1>Viewport size (px):</h1>
        <div className="info-wrapper">
          <ViewportNum value={viewport.width} />
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.3846 38.4133C41.5797 38.6084 41.7345 38.84 41.8401 39.0949C41.9457 39.3498 42 39.623 42 39.8989C42 40.1749 41.9457 40.4481 41.8401 40.703C41.7345 40.9579 41.5797 41.1895 41.3846 41.3846C41.1895 41.5797 40.9579 41.7345 40.703 41.8401C40.4481 41.9457 40.1749 42 39.8989 42C39.623 42 39.3498 41.9457 39.0949 41.8401C38.84 41.7345 38.6084 41.5797 38.4133 41.3846L21 23.9687L3.58672 41.3846C3.19269 41.7786 2.65828 42 2.10105 42C1.54382 42 1.00941 41.7786 0.615383 41.3846C0.22136 40.9906 1.09844e-08 40.4562 0 39.8989C-1.09844e-08 39.3417 0.22136 38.8073 0.615383 38.4133L18.0313 21L0.615383 3.58672C0.22136 3.19269 0 2.65828 0 2.10105C0 1.54382 0.22136 1.00941 0.615383 0.615383C1.00941 0.22136 1.54382 0 2.10105 0C2.65828 0 3.19269 0.22136 3.58672 0.615383L21 18.0313L38.4133 0.615383C38.8073 0.22136 39.3417 -1.09844e-08 39.8989 0C40.4562 1.09844e-08 40.9906 0.22136 41.3846 0.615383C41.7786 1.00941 42 1.54382 42 2.10105C42 2.65828 41.7786 3.19269 41.3846 3.58672L23.9687 21L41.3846 38.4133Z" />
          </svg>
          <ViewportNum value={viewport.height} />
        </div>
        <CreditTag />
      </main>
    </div>
  );
}

export default App;
