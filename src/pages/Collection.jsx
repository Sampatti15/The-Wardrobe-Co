import { useState, useMemo } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import CartToast from '../components/CartToast'
import { useRevealGroup } from '../hooks/useReveal'
import './Collection.css'

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [cartItem, setCartItem] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)
  const revealRef = useRevealGroup('.reveal')

  const filtered = useMemo(() => {
    let list = activeCategory === 'All'
      ? [...products]
      : products.filter((p) => p.category === activeCategory)

    if (sort === 'price-low') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-high') list.sort((a, b) => b.price - a.price)
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [activeCategory, sort])

  const handleAdd = (product) => {
    setCartItem(product)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2800)
  }

  return (
    <div className="page-enter collection" ref={revealRef}>
      <header className="collection__hero">
        <div className="container">
          <h1 className="section-title reveal">The Collection</h1>
          <p className="section-sub reveal reveal-delay-1">
            Filter by category, sort your way, and save favorites with a tap.
          </p>
        </div>
      </header>

      <div className="collection__toolbar container reveal reveal-delay-2">
        <div className="collection__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeCategory === cat ? 'filter-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className="collection__sort">
          <span>Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>

      <p className="collection__count container reveal">
        Showing <strong>{filtered.length}</strong> pieces
      </p>

      <div className="collection__grid container">
        {filtered.map((p, i) => (
          <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
            <ProductCard product={p} onAdd={handleAdd} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="collection__empty container">No items in this category yet.</p>
      )}

      <CartToast item={cartItem} visible={toastVisible} />
    </div>
  )
}
