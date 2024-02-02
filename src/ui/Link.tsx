type TLink = {
  name?: string
  path: string | undefined
  children?: React.ReactNode
  target?: string
}

export default function Link({ name, path, children, ...props }: TLink) {
  return (
    <a href={path} className="link" {...props}>
      {children || name}
    </a>
  )
}
