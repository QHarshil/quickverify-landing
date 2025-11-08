import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
    variant === "secondary"
      ? "bg-muted text-muted-foreground"
      : "bg-primary text-primary-foreground",
    className
  );

  return <span className={base} {...props} />;
}
