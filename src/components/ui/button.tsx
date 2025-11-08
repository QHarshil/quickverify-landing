import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  children,
  variant = "default",
  size = "default",
  asChild,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-primary/40 text-primary hover:bg-primary/10",
    }[variant],
    {
      default: "px-5 py-2.5 text-sm",
      sm: "px-3 py-1.5 text-xs",
      lg: "px-6 py-3 text-base",
    }[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, classes, "inline-flex items-center"),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
