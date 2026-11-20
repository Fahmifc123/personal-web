import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PipelineFlow({ steps, size = "sm" }: { steps: string[]; size?: "sm" | "lg" }) {
  if (size === "sm") {
    return (
      <ol className="flex flex-wrap items-center gap-1" aria-label="Pipeline">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-1">
            <span className="rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
              {step}
            </span>
            {i < steps.length - 1 && <ChevronRight size={12} className="text-primary/60" aria-hidden />}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="flex flex-col gap-3 md:flex-row md:items-stretch" aria-label="Pipeline">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-1 flex-col items-center gap-3 md:flex-row">
          <div
            className={cn(
              "flex w-full flex-1 flex-col items-center justify-center rounded-2xl border px-4 py-4 text-center",
              i === steps.length - 1 ? "border-primary/40 bg-primary/10" : "border-border bg-background/50"
            )}
          >
            <span className="mb-1 text-[10px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-xs font-bold text-foreground">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="shrink-0 rotate-90 text-primary md:rotate-0" aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
}
