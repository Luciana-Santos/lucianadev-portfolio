import { useContext } from 'react'
import { ModalProjectContext } from '../../store/ModalContext'
import { motion } from 'framer-motion'
import Techs from '../../components/Techs'
import Link from '../Link'

export default function ModalContent() {
  const { isModalOpen } = useContext(ModalProjectContext)

  return (
    <div className="h-fit w-full relative px-modalPadding pb-modalPadding mt-10">
      <h3 className="text-mdTurquoise text-modalTitle mb-14 text-center font-berkshire">
        {isModalOpen.project?.title}
      </h3>

      <div className="grid justify-center content-center gap-7 md:grid-cols-2">
        <div className="grid gap-10 overflow-auto">
          <p>{isModalOpen.project?.description}</p>

          <ul className="flex flex-wrap gap-5 items-center">
            {isModalOpen.project?.techs.map((tech) => {
              return (
                <Techs key={tech.label} icon={tech.icon} name={tech.label} />
              )
            })}
          </ul>

          <ul className="flex gap-5">
            <li>
              <Link path={isModalOpen.project?.links?.live}>Live</Link>
            </li>
            <li>
              <Link path={isModalOpen.project?.links?.code}>Code</Link>
            </li>
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="justify-self-center rounded-md overflow-hidden"
        >
          <a href={isModalOpen.project?.links.live} target="_blank">
            <img
              src={isModalOpen.project?.imagem}
              alt={isModalOpen.project?.title}
            />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
