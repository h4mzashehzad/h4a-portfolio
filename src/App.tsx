import Hero from './components/Hero'
import Collapsible from './components/Collapsible'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { RightClickProvider } from './contexts/RightClickContext'
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext'
import { Analytics } from "@vercel/analytics/react"

function AppContent() {
  const { isOpen, closeModal } = useContactModal()
  
  return (
    <>
      <Hero />
      <Collapsible />
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
      <Analytics />
    </>
  )
}

function App() {
  return (
    <RightClickProvider>
      <ContactModalProvider>
        <AppContent />
      </ContactModalProvider>
    </RightClickProvider>
  )
}

export default App
