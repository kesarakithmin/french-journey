interface ButtonProps {
  children: React.ReactNode
  className?: string
}

function Button({ children, className = "" }: ButtonProps) {
  return (
    <button className={`rounded-full bg-[color:var(--color-primary)] px-4 py-2.5 font-semibold text-white shadow-lg shadow-[color:var(--color-shadow)] transition hover:translate-y-[-1px] ${className}`}>
      {children}
    </button>
  )
}

export default Button