// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <nav className="background-header">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="Website logo"
          className="header-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
      </div>
      <div className="nav-icons-container">
        <img
          className="nav-logout"
          alt="nav home"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        />
        <img
          alt="nav products"
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        />
        <img
          alt="nav cart"
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        />
      </div>
    </nav>
    <nav className="background-header-large">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="Website logo"
          className="header-logo"
        />
      </div>
      <div className="buttons-container">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <button type="button" className="logout-button">
          Log Out
        </button>
      </div>
    </nav>
  </>
)

export default Header
