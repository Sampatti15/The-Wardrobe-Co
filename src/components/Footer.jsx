import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">The Wardrobe Co</span>
          <p className="footer__tagline">Curated pieces for every chapter of your story.</p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Pinterest</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Newsletter</a>
          </div>
        </div>

        <p className="footer__copy">&copy; {year} The Wardrobe Co. Crafted with care.</p>
      </div>
    </footer>
  )
}
