type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="text-ltOrange sectionTitle text-center font-berkshire">
      {children}
    </h2>
  )
}
