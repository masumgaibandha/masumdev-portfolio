type SectionLabelProps = {
  children: string;
  /**
   * Position in the page's running index. Rendered zero-padded, followed by
   * a rule that runs to the label. Omit on pages where a running index would
   * imply an order that does not exist.
   */
  index?: number;
  className?: string;
};

/**
 * The recurring structural marker of the systems direction: a zero-padded
 * index, a hairline, and a wide-tracked mono label.
 *
 * The index and rule are decorative — the label text alone carries the
 * meaning, so the number is hidden from assistive technology rather than
 * being read out before every section heading.
 */
export default function SectionLabel({
  children,
  index,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index !== undefined ? (
        <>
          <span
            aria-hidden="true"
            className="tabular text-label text-xs text-muted-foreground"
          >
            {String(index).padStart(2, "0")}
          </span>
          <span
            aria-hidden="true"
            className="h-px w-6 shrink-0 bg-border-strong"
          />
        </>
      ) : null}

      <span className="text-label text-xs text-muted-foreground">
        {children}
      </span>
    </div>
  );
}
