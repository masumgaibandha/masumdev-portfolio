import Image from "next/image";

import type { ProjectScreenshot } from "@/types/project";

type ScreenshotFrameProps = {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  /** Passed to next/image for correct responsive selection. */
  sizes?: string;
  /**
   * Adds a small surface mat around the screenshot. Used where a light product
   * UI would otherwise sit straight on the page background in dark mode and
   * read as pasted onto black. Off by default so existing call sites are
   * unaffected.
   */
  padded?: boolean;
  className?: string;
};

/**
 * Neutral frame for authentic product screenshots.
 *
 * Deliberately has no placeholder or fallback mode: a missing screenshot must
 * fail visibly at the call site rather than render invented product UI. There
 * are no fake browser controls, no coloured glow, and no gradient — a 1px
 * border over a subtle surface, per design rule 8.
 */
export default function ScreenshotFrame({
  screenshot,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  padded = false,
  className = "",
}: ScreenshotFrameProps) {
  return (
    <figure
      className={`overflow-hidden border border-border-strong bg-surface ${
        padded ? "rounded-xl p-2 sm:p-3" : "rounded-lg"
      } ${className}`}
    >
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        sizes={sizes}
        priority={priority}
        className={`h-auto w-full ${padded ? "rounded-md" : ""}`}
      />
    </figure>
  );
}
