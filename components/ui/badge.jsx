import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-gray-200 w-8 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300",
  {
    variants: {
      variant: {
        win: "!border-green-700 border-[1.8px] text-green-700 hover:bg-primary/80",
        lose: "!border-red-700 border-[1.8px] text-red-700 hover:bg-secondary/80",
        draw: "!border-zinc-700 border-[1.8px] text-zinc-600 hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
