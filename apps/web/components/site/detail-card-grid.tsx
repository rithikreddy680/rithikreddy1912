"use client";

import { useMemo, useState } from "react";

import { Modal } from "./modal";

export type DetailCardItem = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  stack?: string;
  tags?: string[];
  bullets: string[];
};

export function DetailCardGrid({
  items,
  columns = 2
}: {
  items: DetailCardItem[];
  columns?: 1 | 2 | 3;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = useMemo(() => items.find((i) => i.id === activeId) ?? null, [activeId, items]);

  const colsClass =
    columns === 1
      ? "md:grid-cols-1"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <>
      <div className={`grid grid-cols-1 gap-6 ${colsClass}`}>
        {items.map((item) => {
          const preview = item.bullets.slice(0, 2);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className="mg-card group w-full text-left"
            >
              <div className="relative px-6 py-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono tracking-[0.18em] text-[var(--text-subtle)]">
                      {item.meta ?? ""}
                    </div>
                    <div className="mt-3 text-lg font-semibold tracking-tight text-[var(--text)]">
                      {item.title}
                    </div>
                    {item.subtitle ? (
                      <div className="mt-1 text-sm text-[var(--text-muted)]">{item.subtitle}</div>
                    ) : null}
                  </div>

                  <div className="text-[11px] font-mono tracking-[0.18em] text-[var(--text-subtle)]">
                    VIEW
                  </div>
                </div>

                {item.stack ? (
                  <div className="mt-4 text-sm text-[var(--text-muted)]">{item.stack}</div>
                ) : null}

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {preview.map((b) => (
                    <li key={b} className="max-h-12 overflow-hidden">
                      {b}
                    </li>
                  ))}
                </ul>

                {item.tags && item.tags.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-transparent px-3 py-1 text-[11px] font-mono tracking-[0.12em] text-[var(--text-subtle)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      <Modal
        open={!!active}
        title={active?.title ?? ""}
        onClose={() => setActiveId(null)}
      >
        {active ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {active.meta ? (
                <div className="rounded-[12px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-4">
                  <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--text-subtle)]">WHEN</div>
                  <div className="mt-2 text-sm text-[var(--text)]">{active.meta}</div>
                </div>
              ) : null}
              {active.stack ? (
                <div className="rounded-[12px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-4">
                  <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--text-subtle)]">STACK</div>
                  <div className="mt-2 text-sm text-[var(--text)]">{active.stack}</div>
                </div>
              ) : null}
            </div>

            {active.subtitle ? (
              <div>
                <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--text-subtle)]">CONTEXT</div>
                <div className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{active.subtitle}</div>
              </div>
            ) : null}

            <div>
              <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--text-subtle)]">HIGHLIGHTS</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-muted)]">
                {active.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {active.tags && active.tags.length ? (
              <div>
                <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--text-subtle)]">TAGS</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] bg-transparent px-3 py-1 text-[11px] font-mono tracking-[0.12em] text-[var(--text-subtle)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  );
}
