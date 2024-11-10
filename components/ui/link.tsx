import * as React from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        ref={ref}
        className={cn("hover:underline", className)}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = "Link" 