import { useState } from 'react'
import { useRevealGroup } from '../hooks/useReveal'
import './About.css'

const values = [
  { title: 'Sustainable', desc: 'Organic fabrics and ethical production partners.' },
  { title: 'Timeless', desc: 'Designs that transcend trends and seasons.' },
  { title: 'Personal', desc: 'Styling guidance tailored to your lifestyle.' },
]

const team = [
  { name: 'Elena Voss', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
  { name: 'Marcus Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Sofia Reyes', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

export default function About() {
  const revealRef = useRevealGroup('.reveal')
  const [activeValue, setActiveValue] = useState(0)

  return (
    <div className="page-enter about" ref={revealRef}>
      <section className="about__hero container">
        <div className="about__hero-text">
          <h1 className="section-title reveal">Our Story</h1>
          <p className="reveal reveal-delay-1">
            The Wardrobe Co began with a simple belief: clothing should feel as good as it looks.
            Founded in 2018, we curate collections that honor craftsmanship, comfort, and conscience.
          </p>
          <p className="reveal reveal-delay-2">
            Every piece is selected for quality, versatility, and the way it makes you move through the world.
          </p>
        </div>
        <div className="about__hero-img reveal reveal-delay-2">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80"
            alt="Boutique interior"
          />
        </div>
      </section>

      <section className="about__values container">
        <h2 className="section-title reveal">What We Stand For</h2>
        <div className="values__tabs reveal reveal-delay-1">
          {values.map((v, i) => (
            <button
              key={v.title}
              type="button"
              className={activeValue === i ? 'values__tab--active' : ''}
              onClick={() => setActiveValue(i)}
            >
              {v.title}
            </button>
          ))}
        </div>
        <div className="values__panel reveal reveal-delay-2" key={activeValue}>
          <h3>{values[activeValue].title}</h3>
          <p>{values[activeValue].desc}</p>
        </div>
      </section>

      {/*<section className="about__team">
        <div className="container">
          <h2 className="section-title reveal">Meet the Team</h2>
          <div className="team__grid">
            {team.map((member, i) => (
              <article key={member.name} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-card__img">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>*/}

      <section className="about__stats container">
        {[
          { num: '8+', label: 'Years of curation' },
          { num: '120+', label: 'Brand partners' },
          { num: '15k', label: 'Happy customers' },
        ].map((stat, i) => (
          <div key={stat.label} className={`stat reveal reveal-delay-${i + 1}`}>
            <span className="stat__num" data-target={stat.num}>{stat.num}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
