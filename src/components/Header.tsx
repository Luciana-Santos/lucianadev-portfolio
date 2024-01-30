import Nav from './Nav'

export default function Header() {
  return (
    <header>
      <Nav />
      <div className="relative justify-center text-center overflow-hidden padblock-header md:py-40">
        <div className="flex gap-20 flex-col py-7 px-5">
          <div className="flex flex-col">
            <h1 className="headerSubtitle text-mdTurquoise">
              Olá, sou{' '}
              <span className="text-ltOrange headerTitle font-berkshire">
                Luciana
              </span>
            </h1>
            <p className="headerSubtitle text-mdTurquoise">
              Desenvolvedora web
            </p>
          </div>
          <div className="flex flex-wrap gap-y-5 gap-x-10 justify-center items-center">
            <a
              href="#contact"
              className="btn bg-ltOrange text-vdBlue btn-call-action"
            >
              Contato
            </a>
            <a
              href="#"
              className="btn text-ltOrange border-[3px] border-ltOrange hover:bg-dkViolet hover:border-dkViolet"
            >
              Currículo
            </a>
          </div>
        </div>
        <div className="h-full w-full absolute top-0 left-0 right-0 pointer-events-none hero-img"></div>
      </div>
    </header>
  )
}