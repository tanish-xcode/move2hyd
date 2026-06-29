import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-full bg-primary text-primary-foreground hover:bg-[hsl(var(--luxury-accent-hover))] shadow-lg hover:shadow-xl hover:scale-105",
        destructive: "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        outline: "rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:border-[hsl(var(--luxury-accent-hover))]",
        secondary: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline link-underline",
        hero: "rounded-full bg-primary text-primary-foreground hover:bg-[hsl(var(--luxury-accent-hover))] shadow-[var(--shadow-accent)] hover:shadow-[0_12px_48px_rgba(57,55,101,0.35)] hover:scale-105",
        glass: "rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base font-medium",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
