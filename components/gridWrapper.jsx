"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import SectionHeader from "./sectionHeader";

// 🔹 Child component — handles per-item animation safely
function GridItem({ itemData, i, smoothProgress }) {
  // Each card’s stacking offset
  const startY = 100 - i * 25; // deeper cards stack more
  const startScale = 0.85 + i * 0.05;

  // Animate from stack → natural position
  const y = useTransform(smoothProgress, [0, 0.6], [startY, 0]);
  const scale = useTransform(smoothProgress, [0, 0.6], [startScale, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.6], [15, 0]);
  const opacity = useTransform(smoothProgress, [0.1, 0.6], [0.5, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        transformOrigin: "center center",
        gridColumn: itemData.colSpan ? `span ${itemData.colSpan}` : undefined,
        gridRow: itemData.rowSpan ? `span ${itemData.rowSpan}` : undefined,
      }}
      className={clsx(
        itemData.className,
        "flex justify-center transition-transform"
      )}
    >
      {itemData.component}
    </motion.div>
  );
}

export default function GridSection({
  label,
  title,
  subtitle,
  centerTitle = "center",
  minColWidth = "300px",
  gap = "24px",
  columns = 3,
  items = [],
  wrapperClass = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  // Scroll progress across this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // starts before fully visible, ends when centered
  });

  // Smooth spring for better feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section className={clsx("mainSec relative", wrapperClass)} ref={ref}>
      <SectionHeader
        label={label}
        title={title}
        subtitle={subtitle}
        align={centerTitle}
      />

      <div
        className="grid gridSectionAuto !auto-rows-max !items-between grid-flow-col"
        style={{
          gap: gap,
          gridTemplateColumns: `repeat(${columns}, minmax(${minColWidth}, 1fr))`,
        }}
      >
        {items.map((itemData, i) => (
          <GridItem
            key={i}
            i={i}
            itemData={itemData}
            smoothProgress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
}
