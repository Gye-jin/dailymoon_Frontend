import React from "react";

export default function Header() {
  return (
    <nav
      className="navbar navbar-dark bg-dark d-flex align-items-center justify-content-center"
      style={{ position: "fixed", top: 0, width: "100%" }}
    >
      <a
        className="navbar-brand font-weight-bold"
        style={{
          fontSize: "27px",
          fontWeight: "630",
          letterSpacing: "0.8PX",
        }}
        href="/api/diarys"
      >
        🌕 DAILY MOON 🌕
      </a>
    </nav>
  );
}
