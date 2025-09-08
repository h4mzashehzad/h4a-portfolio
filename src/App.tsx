import Hero from './components/Hero'
import Collapsible from './components/Collapsible'
import Footer from './components/Footer'
import { RightClickProvider } from './contexts/RightClickContext'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <RightClickProvider>
      <Hero />
      <Collapsible />
      <Footer />
      <Analytics />
    </RightClickProvider>
  )
}

export default App
