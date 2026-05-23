import { cn } from "../../../utils/cn"

type Props = {
  placeholder?: string
  className?: string
}

export default function Input({ placeholder, className }: Props) {
  return (
    <input
      placeholder={placeholder}
      className={cn(
        "w-full border-2 border-border px-4 py-3 text-sm outline-none focus:border-primary",
        className
      )}
    />
  )
}