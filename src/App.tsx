import Hero from './components/Hero'
import Collapsible from './components/Collapsible'
import Footer from './components/Footer'
import { RightClickProvider } from './contexts/RightClickContext'

function App() {
  return (
    <RightClickProvider>
      <Hero />
      <Collapsible />
      <Footer />
    </RightClickProvider>
  )
}

export default App
