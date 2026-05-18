import { useState } from 'react'
import './ProductCard.css'

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <article className="product-card">
      <div className="product-card__media">
        {!imgLoaded && <div className="product-card__skeleton" />}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={imgLoaded ? 'loaded' : ''}
          onLoad={() => setImgLoaded(true)}
        />
        {product.tag && <span className="product-card__tag">{product.tag}</span>}
        <button
          type="button"
          className={`product-card__like ${liked ? 'product-card__like--active' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {liked ? '♥' : '♡'}
        </button>
        <button
          type="button"
          className="product-card__quick"
          onClick={() => onAdd?.(product)}
        >
          Quick Add
        </button>
      </div>
      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>
    </article>
  )
}
