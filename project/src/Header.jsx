function Header({ activeSection }) {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'subscribe', label: 'Subscribe' },
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#about"
        onClick={(event) => {
          event.preventDefault()
          scrollToSection('about')
        }}
      >
        Growth Lab
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {sections.map((section) => (
          <button
            className={activeSection === section.id ? 'nav-tab is-active' : 'nav-tab'}
            key={section.id}
            type="button"
            aria-current={activeSection === section.id ? 'page' : undefined}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header