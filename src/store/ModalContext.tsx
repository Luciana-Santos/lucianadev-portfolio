import { createContext, useState } from 'react'

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

interface IModalProvider {
  children: React.ReactNode
}

interface IModalContext {
  isModalOpen: IModalProps
  handleOpenModal: (data: ProjectProps) => void
  handleCloseModal: () => void
}

interface IModalProps {
  show: boolean
  project?: ProjectProps
}

export const ModalProjectContext = createContext<IModalContext>(
  {} as IModalContext,
)

const ModalProjectProvider = ({ children }: IModalProvider) => {
  const [isModalOpen, setisModalOpen] = useState<IModalProps>({ show: false })

  const handleOpenModal = (data: ProjectProps) => {
    setisModalOpen({ show: true, project: data })
  }

  const handleCloseModal = () => {
    setisModalOpen({ show: false })
  }

  return (
    <ModalProjectContext.Provider
      value={{ isModalOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalProjectContext.Provider>
  )
}

export default ModalProjectProvider
