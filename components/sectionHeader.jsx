"use client";

import React from "react";
import clsx from "clsx";
import Label from "./lable";
import Typography from "./typography";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "headerSection",
        align === "center" && "text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        className
      )}
    >
      {label && (
        <div className="  w-full ">
          {" "}
          <Label className="lable " text={label} />{" "}
        </div>
      )}{" "}
      {title && (
        <div className="  w-full ">
          {" "}
          <Typography variant="h2" style={{ whiteSpace: "pre-line" }}>
            {title}
          </Typography>{" "}
        </div>
      )}{" "}
      {subtitle && (
        <div className="max-w-[816px] w-full ">
          {" "}
          <Typography variant="body-4" className="color-black-400 ">
            {" "}
            {subtitle}{" "}
          </Typography>{" "}
        </div>
      )}
    </div>
  );
}
