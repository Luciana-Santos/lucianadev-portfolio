import { Fade } from 'react-awesome-reveal'
import Link from '../ui/Link'
import Title from '../ui/Title'
import { content } from '../utils/content'
import { getYearsOld } from '../utils/currentAge'
import Techs from './Techs'

export default function About() {
  return (
    <>
      <section id="about" className=" ">
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
                      {content.sobreLinks.map((link) => {
                        return (
                          <li key={link.id}>
                            <Link name={link.name} path={link.url} />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-berkshire">
                      Tecnologias:
                    </h3>
                    <ul className="flex gap-5 items-center flex-wrap">
                      {content.sobreTechs.map((tech) => {
                        return (
                          <Techs
                            key={tech.id}
                            icon={tech.icon}
                            name={tech.name}
                          />
                        )
                      })}
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
