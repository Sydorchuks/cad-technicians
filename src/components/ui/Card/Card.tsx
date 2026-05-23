import { cn } from "../../../utils/cn"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={cn("p-6 bg-white border border-border", className)}>
      {children}
    </div>
  )
}