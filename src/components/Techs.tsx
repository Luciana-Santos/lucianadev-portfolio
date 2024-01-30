type Techs = {
  icon?: string
}

export default function Techs({ icon }: Techs) {
  return (
    <li className="max-w-12 relative *:hover:block">
      <img src={icon} alt="tech icon" />
      <span className="bg-dkViolet rounded text-xs absolute bottom-[-40px] left-[50%] translate-x-[-50%] z-50 text-center traking-[1px] p-[4px] hidden">
        HTML
      </span>
    </li>
  )
}
