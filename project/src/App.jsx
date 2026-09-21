import { useEffect, useState } from 'react'
import Header from './Header.jsx';
import  Footer from './Footer.jsx';
import './App.css'
import About from './components/about.jsx';
import Subscribe from './components/subscribe.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'subscribe']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0.1, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <Header activeSection={activeSection} />
      <main>
        <About />
        <Subscribe id="subscribe" />
      </main>
      <Footer />
    </div>
  )
}

export default App
