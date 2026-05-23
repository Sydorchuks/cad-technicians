import { cn } from "../../../utils/cn"

type Props = {
  children: React.ReactNode
  align?: "left" | "center"
  size?: "lg" | "md"
  className?: string
}

export default function Title({ children, align = "left", size = "lg", className }: Props) {
  return (
    <h2
      className={cn(
        "font-heading uppercase",
        size === "lg" && "text-[48px] leading-[1.2]",
        size === "md" && "text-[36px]",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {children}
    </h2>
  )
}