import React from 'react'
import { cn } from '../../lib/utils'
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-white mx-auto text-center rounded-full font-medium transition-all duration-300 ease-out overflow-hidden backdrop-blur-sm cursor-pointer inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-slate-800/40 hover:bg-slate-700/60 border-slate-600/50 hover:border-purple-500/60 text-slate-100 hover:text-white shadow-lg hover:shadow-purple-500/25",
                solid: "bg-purple-600 hover:bg-purple-500 text-white border-purple-500 hover:border-purple-400 shadow-lg shadow-purple-500/25 hover:shadow-purple-400/40",
                ghost: "border-slate-600/30 bg-slate-900/20 hover:bg-slate-800/40 text-slate-200 hover:text-white hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20",
            },
            size: {
                default: "px-8 py-2.5 text-sm",
                sm: "px-6 py-2 text-xs",
                lg: "px-10 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Top glow line */}
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-4/5 mx-auto from-transparent via-purple-400 to-transparent hidden", neon && "block")} />
                
                {/* Inner glow effect */}
                <span className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-500/0 via-purple-400/30 to-purple-500/0 blur-sm hidden", neon && "block")} />
                
                <span className="relative z-10 inline-flex items-center gap-2">
                    {children}
                </span>
                
                {/* Bottom glow line */}
                <span className={cn("absolute group-hover:opacity-60 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-4/5 mx-auto from-transparent via-purple-400 to-transparent hidden", neon && "block")} />
                
                {/* Outer glow effect */}
                <span className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-md -z-10 hidden", neon && "block")} />
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };