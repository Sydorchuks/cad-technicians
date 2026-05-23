import { cn } from "../../../utils/cn"

type Props = {
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
}

export default function Button({ children, variant = "primary", className }: Props) {
  return (
    <button
      className={cn(
        "px-6 py-3 text-sm uppercase font-semibold transition-all duration-200",
        variant === "primary" && "bg-primary text-white hover:bg-primaryDark",
        variant === "outline" && "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        className
      )}
    >
      {children}
    </button>
  )
}