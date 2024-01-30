import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { ModalProjectContext } from '../../store/ModalContext'
import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const modalAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

interface IModalProps {
  children: React.ReactNode
}

const Backdrop = () => {
  const { handleCloseModal } = useContext(ModalProjectContext)

  return (
    <motion.div
      onClick={handleCloseModal}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 left-0 bottom-0 w-full h-full bg-modalBackdrop z-[8888] grid content-center justify-center"
    ></motion.div>
  )
}

const ModalOverlay = ({ children }: IModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed top-1/2 left-1/2 z-[99999] grid content-center justify-center h-min w-modalWidth my-auto mx-auto bg-dkViolet rounded-lg overflow-hidden modal-overlay"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const portalElement = document.getElementById('overlays')

export default function Modal({ children }: IModalProps) {
  const { handleCloseModal } = useContext(ModalProjectContext)

  return (
    <>
      {portalElement && createPortal(<Backdrop />, portalElement)}
      {portalElement &&
        createPortal(
          <ModalOverlay>
            <IoClose
              className="absolute top-2.5 right-2 text-3xl cursor-pointer z-[10100] text-mdTurquoise"
              onClick={handleCloseModal}
            />
            {children}
          </ModalOverlay>,
          portalElement,
        )}
    </>
  )
}
