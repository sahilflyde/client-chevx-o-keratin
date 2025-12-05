"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function Label({
  text,
  className = "",
  variant = "primary", // primary | secondary | greenVariant | tab
  icon,
  iconPosition = "left",
  active = false, // 👈 NEW for tab active color
  ...props
}) {
  const typographyVariant = variant === "secondary" ? "body-5" : "body-4";

  const getColorVariant = () => {
    if (variant === "greenVariant") return "primary";
    if (variant === "tab" && active) return "primary"; // text becomes white-ish
    return "gray";
  };

  return (
    <div
      {...props}
      className={clsx(
        "label",
        `label--${variant}`,
        active && "label--active",
        className
      )}
    >
      <Suspense fallback={<div style={{ height: "1em" }} />}>
        {icon && iconPosition === "left" && (
          <Image
            src={icon}
            alt="label icon"
            width={16}
            height={16}
            style={{ flexShrink: 0 }}
          />
        )}

        {text && (
          <Typography
            variant={typographyVariant}
            colorVariant={getColorVariant()}
          >
            {text}
          </Typography>
        )}

        {icon && iconPosition === "right" && (
          <Image
            src={icon}
            alt="label icon"
            width={16}
            height={16}
            style={{ flexShrink: 0 }}
          />
        )}
      </Suspense>
    </div>
  );
}
