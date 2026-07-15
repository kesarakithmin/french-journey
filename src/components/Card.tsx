interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 shadow-[0_10px_40px_var(--color-shadow)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}

export default Card