import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useReveal'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Home.css'

const heroImages = [
  'https://images.unsplash.com/photo-1483985988351-763728e1935b?w=800&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
]

export default function Home() {
  const revealRef = useRevealGroup('.reveal')

  return (
    <div className="page-enter home" ref={revealRef}>
      <section className="hero">
        <div className="hero__content container">
          <p className="hero__eyebrow reveal">Spring / Summer 2026</p>
          <h1 className="hero__title reveal reveal-delay-1">
            Dress the moment.<br />
            <em>Wear the story.</em>
          </h1>
          <p className="hero__desc reveal reveal-delay-2">
            Timeless silhouettes, natural fabrics, and pieces that move with you — curated for the modern wardrobe.
          </p>
          <div className="hero__actions reveal reveal-delay-3">
            <Link to="/collection" className="btn btn-primary">Explore Collection</Link>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </div>
        </div>

        <div className="hero__gallery reveal reveal-delay-2">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className="hero__frame"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img src={src} alt={`Fashion look ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="marquee">
        <div className="marquee__track">
          {[...Array(2)].map((_, n) => (
            <span key={n}>
              Linen · Silk · Cashmere · Organic Cotton · Sustainable · Tailored ·
            </span>
          ))}
        </div>
      </section>

      <section className="featured container">
        <div className="featured__header">
          <h2 className="section-title reveal">Featured Pieces</h2>
          <p className="section-sub reveal reveal-delay-1">
            Handpicked styles our stylists love this season.
          </p>
        </div>
        <div className="featured__grid">
          {products.slice(0, 4).map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <Link to="/collection" className="featured__link btn btn-outline reveal">
          View All →
        </Link>
      </section>

      <section className="lookbook">
        <div className="lookbook__grid container">
          <div className="lookbook__text reveal">
            <h2>Season Lookbook</h2>
            <p>Layer textures, play with proportion, and find your signature palette.</p>
            <Link to="/collection" className="btn btn-primary">Shop Lookbook</Link>
          </div>
          <div className="lookbook__images">
            <img
              className="lookbook__img lookbook__img--1 reveal"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
              alt="Street style fashion"
            />
            <img
              className="lookbook__img lookbook__img--2 reveal reveal-delay-2"
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80"
              alt="Editorial fashion"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
