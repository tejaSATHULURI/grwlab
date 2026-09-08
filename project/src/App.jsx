import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import './App.css'

const GOOGLE_FORM_URL = 'https://forms.gle/yEPrPVZGweRbZwmp7'

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
        <section className="content-section about-section" id="about">
          <p className="eyebrow">Independent ideas, carefully gathered</p>
          <h1>A slower kind of newsletter.</h1>
          <p className="intro">
            Growth Lab is a twice-monthly dispatch about making meaningful work,
            noticing the details, and leaving room for better questions.
          </p>
          <div className="about-details">
            <span>01 / About</span>
            <span>Letters for curious people</span>
          </div>
        </section>

        <section className="content-section subscribe-section" id="subscribe">
          <div>
            <p className="eyebrow">02 / Subscribe</p>
            <h2>Something worth opening.</h2>
            <p className="subscribe-copy">
              Get the next note in your inbox. No noise, no algorithms, just a
              thoughtful letter when there is something to say.
            </p>
          </div>
          <div className="google-form-wrap">
            <iframe
              className="google-form"
              src={GOOGLE_FORM_URL}
              title="Growth Lab subscription form"
              loading="lazy"
            >
              Loading the subscription form...
            </iframe>
          </div>
        </section>
      </main>
      <footer>Growth Lab <span>Made for the in-between moments.</span></footer>
    </div>
  )
}

export default App
