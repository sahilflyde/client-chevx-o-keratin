"use client";
import React, { Suspense } from "react";

const Typography = React.lazy(() => import("./typography"));

export default function Label({ text, className = "", ...props }) {
  return (
    <div {...props} style={{ padding: "0px 0px" }}>
      <Suspense fallback={<div style={{ height: "1em" }} />}>
        {text && (
          <Typography variant="body-4" className={`${className}`}>
            {text}
          </Typography>
        )}
      </Suspense>
    </div>
  );
}
