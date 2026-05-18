import './CartToast.css'

export default function CartToast({ item, visible }) {
  if (!item) return null

  return (
    <div className={`cart-toast ${visible ? 'cart-toast--visible' : ''}`} role="status">
      <img src={item.image} alt="" />
      <div>
        <strong>Added to bag</strong>
        <span>{item.name}</span>
      </div>
    </div>
  )
}
