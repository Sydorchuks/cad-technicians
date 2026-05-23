import { cn } from "../../../utils/cn"

type Props = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "primary"
}

export default function Section({ children, className, variant = "default" }: Props) {
  return (
    <section
      className={cn(
        "py-20 relative",
        variant === "primary" && "bg-primary text-white",
        variant === "default" && "bg-white text-text",
        className
      )}
    >
      {children}
    </section>
  )
}