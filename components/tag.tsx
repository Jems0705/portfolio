import { cn } from "@/lib/utils";
import { LucideIcon, UsersIcon } from "lucide-react";
import React, { PropsWithChildren } from "react";

type TagProps = PropsWithChildren & {
    Icon?: LucideIcon;
    className?: string;
};

export const Tag = ({ Icon, className, children }: TagProps) => {
    return (
        <div
            className={cn(
                "inline-flex items-center px-4 py-2 rounded-lg border space-x-2",
                className
            )}
        >
            {Icon && <Icon className="h-4 w-4" />}
            <span className="text-sm font-medium">{children}</span>
        </div>
    );
};
