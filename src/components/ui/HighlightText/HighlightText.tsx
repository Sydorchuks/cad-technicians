type HighlightTextProps = {
    children: React.ReactNode
    className?: string
  }
  
  export default function HighlightText({ children, className }: HighlightTextProps) {
    return (
      <span
        className={`
          relative inline-block
          ${className || ""}
        `}
      >
        {children}
        <span className="absolute left-0 bottom-[4px] w-full h-[10px] bg-[#008767] -z-10"/>
      </span>
    )
  }