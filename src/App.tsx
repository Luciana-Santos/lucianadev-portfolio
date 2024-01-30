import { useContext } from 'react'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Modal from './ui/modal/Modal'
import ModalContent from './ui/modal/ModalContent'
import { ModalProjectContext } from './store/ModalContext'

export default function App() {
  const { isModalOpen } = useContext(ModalProjectContext)

  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        {isModalOpen.show && (
          <Modal>
            <ModalContent />
          </Modal>
        )}
      </main>
    </>
  )
}
