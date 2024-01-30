import { useContext } from 'react'
import { ModalProjectContext } from '../store/ModalContext'
import { motion } from 'framer-motion'

export interface ProjectProps {
  id: number
  title: string
  techs: {
    label: string
    icon: string
  }[]
  description: string
  imagem: string
  links: {
    live: string
    code: string
  }
}

export default function ProjectItem({ data }: { data: ProjectProps }) {
  const { handleOpenModal } = useContext(ModalProjectContext)

  return (
    <motion.div
      className="w-[300px] cursor-pointer rounded-md overflow-hidden"
      onClick={handleOpenModal.bind(this, data)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div>
        <img src={data.imagem} alt="" />
      </div>
      <div className="bg-dkViolet p-4">
        <h4 className="leading-[1]">{data.title}</h4>
      </div>
    </motion.div>
  )
}
