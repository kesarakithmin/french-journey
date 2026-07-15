interface ButtonProps {
  children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
      {children}
    </button>
  )
}

export default Button