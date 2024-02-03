import { motion, useScroll, useTransform } from 'framer-motion'
import { useContext } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import { ModalProjectContext } from './store/ModalContext'
import Modal from './ui/modal/Modal'
import ModalContent from './ui/modal/ModalContent'

export default function App() {
  const { isModalOpen } = useContext(ModalProjectContext)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 100], [1, 100])
  const y2 = useTransform(scrollY, [0, 100], [1, 50])

  return (
    <>
      <Header />
      <main className="relative planet-top">
        <motion.div
          style={{ y: y1, x: 0 }}
          className="back-cloud w-full h-[420px] widescreen:h-[534px] overflow-hidden absolute top-[-250px] left-0 z-[-200]"
        ></motion.div>
        <motion.div
          style={{ y: y2, x: 0 }}
          className="front-cloud w-full h-[420px] widescreen:h-[534px] absolute top-[-205px] left-0 z-[-100]"
        ></motion.div>
        <About />
        <Projects />
        {isModalOpen.show && (
          <Modal>
            <ModalContent />
          </Modal>
        )}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
