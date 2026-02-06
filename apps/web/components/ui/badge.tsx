"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.15em]",
        variant === "default"
          ? "border-neutral-700 bg-neutral-800 text-neutral-50"
          : "border-neutral-600 bg-transparent text-neutral-200",
        className
      )}
      {...props}
    />
  );
}

