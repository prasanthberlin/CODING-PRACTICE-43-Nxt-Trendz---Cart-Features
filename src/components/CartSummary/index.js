// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotalOrders = () => {
        let sum = 0
        let i = 0
        while (i < cartList.length) {
          sum += cartList[i].price * cartList[i].quantity
          i += 1
        }
        return sum
      }

      return (
        <div className="cart-summary-container">
          <div className="cart-summary-details">
            <h1 className="order-total-heading">
              Order Total:{' '}
              <span className="order-total-price">
                Rs {getTotalOrders()}
                /-
              </span>
            </h1>
            <p className="item-in-cart-count">
              {cartList.length} Items in cart
            </p>
          </div>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
