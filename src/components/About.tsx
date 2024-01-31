import { motion, useScroll, useTransform } from 'framer-motion'
import Title from '../ui/Title'
import Techs from './Techs'
import { getYearsOld } from '../utils/currentAge'
import { Fade } from 'react-awesome-reveal'

export default function About() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 100], [1, 100])
  const y2 = useTransform(scrollY, [0, 100], [1, 50])

  return (
    <>
      <section className="planet-top relative">
        <motion.div
          style={{ y: y1, x: 0 }}
          className="back-cloud w-full h-[247px] overflow-hidden absolute top-[-250px] left-0 z-[-200]"
        ></motion.div>
        <motion.div
          style={{ y: y2, x: 0 }}
          className="front-cloud w-full h-[385px] absolute top-[-205px] left-0 z-[-100]"
        ></motion.div>

        <div className="section-layout">
          <Fade direction="down">
            <Title>Sobre</Title>
          </Fade>

          <div className="grid gap-10 md:grid-cols-[2fr_1fr] items-center">
            <Fade direction="left">
              <div className="grid gap-5">
                <p>
                  Sou Luciana Santos, {getYearsOld()} anos, residente de São
                  Paulo-SP e Desenvolvedora front end.
                </p>
                <p>
                  Minha parte favorita em trabalhar com desenvolvimento web é a
                  possibilidade de transformar ideias em linhas de códigos
                  executáveis e ver o resultado fluir na tela. Estou sempre
                  aprendendo algo novo e subindo mais um degrau para chegar no
                  meu objetivo, que não é estático e está em constante
                  desenvolvimento.
                </p>
                <div className="flex gap-10 mt-8">
                  <div>
                    <h3 className="mb-3 text-2xl font-berkshire">Links:</h3>
                    <ul>
                      <li>
                        <a href="#" className="link">
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link">
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-berkshire">
                      Tecnologias:
                    </h3>
                    <ul className="flex gap-5 items-center flex-wrap">
                      <Techs />
                      <Techs />
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction="right">
              <div className="mx-auto m-w-[400px]">
                <img src="/assets/sobre-section.png" alt="sobre imagem" />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}
