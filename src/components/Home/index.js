// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <div className="home-background-small">
        <Header />
        <h1 className="heading-style">Clothes That Get YOU Noticed</h1>
        <img
          className="home-image-style"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
        <p className="description-style">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are.So,celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <div className="home-background-large">
        <Header />
        <div className="description-container">
          <div className="content-container">
            <h1 className="heading-style">Clothes That Get YOU Noticed</h1>
            <p className="description-style">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a maker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are.So,celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            className="home-image-style"
            alt="clothes that get you noticed"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          />
        </div>
      </div>
    </>
  )
}

export default Home
