import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
    variants: {
        size: {
            none: "max-w-none",
            xs: "max-w-xl",
            sm: "max-w-3xl",
            md: "max-w-4xl",
            "4xl": "max-w-4xl",
            lg: "max-w-5xl",
            xl: "max-w-6xl",
            "2xl": "max-w-7xl",
            full: "max-w-full",
        },
    },

    defaultVariants: {
        size: "md",
    },
});

type ContainerProps<T extends React.ElementType = "div"> = {
    as?: T;
    ref?: React.ComponentPropsWithRef<T>["ref"];
    children?: React.ReactNode;
    className?: string;
} & VariantProps<typeof containerVariants> &
    Omit<React.ComponentPropsWithoutRef<T>, "as" | "size" | "className">;

function Container<T extends React.ElementType = "div">({
    as,
    size,
    className,
    children,
    ...props
}: ContainerProps<T>) {
    const Component = as ?? "div";

    return (
        <Component
            className={cn(
                containerVariants({
                    size,
                }),
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export { Container, containerVariants, type ContainerProps };
export default Container;
