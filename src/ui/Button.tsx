type YButton = {
  path: string
  children: React.ReactNode
  className?: string
}

export default function Button({
  path,
  children,
  className,
  ...props
}: YButton) {
  return (
    <a href={path} className={`btn ${className}`} {...props}>
      {children}
    </a>
  )
}
