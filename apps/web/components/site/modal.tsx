"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({
  open,
  title,
  children,
  onClose
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close"
        className="absolute inset-0 cursor-default bg-black/55"
        onClick={onClose}
        type="button"
      />

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 sm:items-center">
        <div className="pointer-events-auto w-full max-w-2xl">
          <div className="mg-card relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_top,white,transparent_55%)] dark:opacity-[0.08]" />
            <div className="relative border-b border-[var(--border)] px-5 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.35em] text-[var(--text-subtle)]">DETAILS</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-[var(--text)]">{title}</div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="mg-btn-ghost px-3 py-2 text-xs tracking-[0.22em]"
                >
                  CLOSE
                </button>
              </div>
            </div>
            <div className="relative max-h-[70vh] overflow-auto px-5 py-5 sm:px-6">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
