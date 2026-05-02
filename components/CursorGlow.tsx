"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl transition-transform duration-150"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
      }}
    />
  );
}