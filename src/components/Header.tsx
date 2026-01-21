import { motion, useScroll, useTransform } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import Button from '../ui/Button'
import Nav from './Nav'

export default function Header() {
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 400], [0, -100])

  return (
    <header>
      <Nav />
      <div className="relative justify-center text-center overflow-hidden padblock-header md:py-40">
        <div className="flex gap-20 flex-col py-7 px-5">
          <Fade direction="left">
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
          </Fade>
          <Fade direction="right">
            <div className="flex flex-wrap gap-y-5 gap-x-10 justify-center items-center">
              <Button
                path="#contact"
                className="bg-ltOrange text-vdBlue btn-call-action"
              >
                Contato
              </Button>
              <Button
                path="https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/curriculo/LUCIANA SANTOS-2026.pdf"
                className="flex items-center gap-2 text-ltOrange border-[3px] border-ltOrange hover:bg-dkViolet hover:border-dkViolet"
              >
                <PiDownloadSimpleBold />
                Currículo
              </Button>
            </div>
          </Fade>
        </div>
        <motion.div
          style={{ y: y2, x: 0 }}
          className="h-full w-full absolute top-0 left-0 right-0 pointer-events-none hero-front"
        ></motion.div>
        <div className="h-full w-full absolute top-0 left-0 right-0 pointer-events-none hero-back"></div>
      </div>
    </header>
  )
}
