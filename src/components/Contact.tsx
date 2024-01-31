import { IoMailOutline } from 'react-icons/io5'
import Title from '../ui/Title'

export default function Contact() {
  return (
    <section className="relative section-layout">
      <Title>Contato</Title>

      <div className="flex items-center  flex-col-reverse md:flex-row justify-between gap-14">
        <div>
          <img src="/assets/contact-img.png" alt="" />
        </div>
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
      </div>
    </section>
  )
}
