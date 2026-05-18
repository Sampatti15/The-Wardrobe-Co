import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Collection' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen((o) => {
      document.body.style.overflow = o ? '' : 'hidden'
      return !o
    })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__logo">
          <span className="nav__logo-mark">W</span>
          <span>The Wardrobe Co</span>
        </NavLink>

        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/collection" className="nav__cta btn btn-primary">
          Shop Now
        </NavLink>

        <button
          type="button"
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav__overlay ${menuOpen ? 'nav__overlay--visible' : ''}`}
        onClick={toggleMenu}
        aria-hidden="true"
      />
    </header>
  )
}
