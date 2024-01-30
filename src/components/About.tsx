import Title from '../ui/Title'
import Techs from './Techs'

export default function About() {
  return (
    <>
      <section className="planet-top relative">
        <div className="back-cloud w-full h-[427px] absolute top-[-248px] left-0 z-[-200]"></div>
        <div className="front-cloud w-full h-[380px] absolute top-[-205px] left-0 z-[-100]"></div>

        <div className="section-layout">
          <Title>Sobre</Title>

          <div className="grid gap-10 md:grid-cols-[2fr_1fr] items-center">
            <div className="grid gap-5">
              <p>
                Sou Luciana Santos, 26 anos, residente de São Paulo-SP e
                Desenvolvedora front end.
              </p>
              <p>
                Minha parte favorita em trabalhar com desenvolvimento web é a
                possibilidade de transformar ideias em linhas de códigos
                executáveis e ver o resultado fluir na tela. Estou sempre
                aprendendo algo novo e subindo mais um degrau para chegar no meu
                objetivo, que não é estático e está em constante
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
                  <h3 className="mb-3 text-2xl font-berkshire">Tecnologias:</h3>
                  <ul className="flex gap-5 items-center flex-wrap">
                    <Techs />
                    <Techs />
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-auto m-w-[400px]">
              <img src="/assets/sobre-section.png" alt="sobre imagem" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
