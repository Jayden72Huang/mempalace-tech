"use client";

import { useEffect, useRef } from "react";

export default function AdsterraNative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl29097782.profitablecpmratenetwork.com/868a1c36f4e2500781acb167bc3c6a08/invoke.js";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="my-8">
      <div
        ref={containerRef}
        id="container-868a1c36f4e2500781acb167bc3c6a08"
      />
    </div>
  );
}
