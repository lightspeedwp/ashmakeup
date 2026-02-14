"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

import { cn } from "./utils";
import "@/styles/blocks/layout-components.css";

function AspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      className={cn("aspect-ratio", className)}
      {...props}
    />
  );
}

export { AspectRatio };
