type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className
}: Props) {
  return (
    <div
      className={`w-full max-w-[2500px] mx-auto px-[20px] sm:px-[20px] md:px-[80px] lg:px-[140px] xl:px-[180px] 2xl:px-[260px] 3xl:px-[480px]
        ${className || ""}
      `}
    >
      {children}
    </div>
  )
}