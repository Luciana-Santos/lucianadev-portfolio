import { IoMailOutline } from 'react-icons/io5'
import Title from '../ui/Title'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {
  return (
    <section className="relative section-layout">
      <Fade direction="down">
        <Title>Contato</Title>
      </Fade>

      <div className="flex items-center  flex-col-reverse md:flex-row justify-between gap-14">
        <Fade direction="left">
          <div>
            <img src="/assets/contact-img.png" alt="" />
          </div>
        </Fade>

        <Fade direction="right">
          <div>
            <p className="mb-10">
              Disponível para novos projetos.
              <br />
              Entre em contato e bora bater um papo!
            </p>
            <ul>
              <li>
                <a
                  href="mailto:contato@luciana.dev"
                  className="flex gap-2.5 items-center"
                >
                  <IoMailOutline size={40} className="text-mdGreen" />
                  <span className="link">contato@luciana.dev</span>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  )
}
