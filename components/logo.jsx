"use client";
import React from "react";
import Image from "next/image";

export default function Logo({
  src,
  alt = "Logo Image",
  width = 299,
  height = 269,
  className = "",
}) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
