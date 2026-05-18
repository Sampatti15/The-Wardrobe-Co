import { useState } from 'react'
import { useRevealGroup } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const revealRef = useRevealGroup('.reveal')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.includes('@')) next.email = 'Please enter a valid email'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
  }

  return (
    <div className="page-enter contact" ref={revealRef}>
      <div className="contact__layout container">
        <div className="contact__info">
          <h1 className="section-title reveal">Get in Touch</h1>
          <p className="section-sub reveal reveal-delay-1">
            Questions about sizing, styling, or your order? We would love to hear from you.
          </p>

          <ul className="contact__details reveal reveal-delay-2">
            <li>
              <strong>Visit</strong>
              <span>124 Mercer Street, New York, NY</span>
            </li>
            <li>
              <strong>Email</strong>
              <a href="mailto:hello@thewardrobeco.com">hello@thewardrobeco.com</a>
            </li>
            <li>
              <strong>Hours</strong>
              <span>Mon–Sat 10am–7pm · Sun 11am–5pm</span>
            </li>
          </ul>

          <div className="contact__map reveal reveal-delay-3">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
              alt="Store interior"
            />
          </div>
        </div>

        <div className="contact__form-wrap reveal reveal-delay-2">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h2>Thank you!</h2>
              <p>We will get back to you within 24 hours.</p>
              <button type="button" className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  className={errors.name ? 'input--error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className={errors.email ? 'input--error' : ''}
                  placeholder="you@email.com"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                Message
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className={errors.message ? 'input--error' : ''}
                  placeholder="How can we help?"
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
