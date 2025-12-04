"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Tools({ items = [] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 649);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return <div className="no-tools">No tools available</div>;
  }

  const column1 = items.slice(0, 3);
  const column2 = items.slice(3);

  // 🔥 Helper: Safe Image
  const safeImage = (src, fallbackSize = "184x184") =>
    src && src.trim() !== ""
      ? src
      : `https://placehold.co/${fallbackSize}?text=Image`;

  return (
    <>
      {isMobile ? (
        <div className="mobile-tools-flex">
          {items.map((item, index) => (
            <div
              key={index}
              className={`tool-item ${
                index === items.length - 1 && items.length % 2 !== 0
                  ? "center-last"
                  : ""
              }`}
            >
              <Image
                src={safeImage(item.src, "82x82")}
                alt={item.alt || `Tool ${index + 1}`}
                width={82}
                height={82}
                className="tool-image"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="tools">
          <div className="column">
            {column1.map((item, index) => (
              <div key={index} className="tool-item">
                <Image
                  src={safeImage(item.src)}
                  alt={item.alt || `Tool ${index + 1}`}
                  width={184}
                  height={184}
                  className="tool-image"
                />
              </div>
            ))}
          </div>

          <div className="column">
            {column2.map((item, index) => (
              <div key={index} className="tool-item">
                <Image
                  src={safeImage(item.src)}
                  alt={item.alt || `Tool ${index + 4}`}
                  width={184}
                  height={184}
                  className="tool-image"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
