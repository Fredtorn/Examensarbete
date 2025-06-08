import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Thesis from './Thesis'
import Write from './Write'

function App() {
  return (
    <>
      <Navigation />
      <main className="bg-primary pt-5 min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examensarbete" element={<Thesis />} />
          <Route path="/skriv" element={<Write />} />
        </Routes>
      </main>
    </>
  )
}

export default App
