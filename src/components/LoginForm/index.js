// Write your JS code here
import {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', wrongCredentials: false}

  onchangeUsername = event => {
    this.setState({username: event.target.value, wrongCredentials: false})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onsubmittingCorrectCredentials = jwtToken => {
    const {history} = this.props
    console.log(history)
    Cookies.set('jwtToken', jwtToken, {expires: 1})
    history.replace('/')
  }

  onsubmittinform = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onsubmittingCorrectCredentials(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, wrongCredentials: true})
    }
  }

  render() {
    const {wrongCredentials, errorMsg} = this.state
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-background">
        <img
          alt="website logo"
          className="logo-small-devices"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          className="website-login-image"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form className="login-form" onSubmit={this.onsubmittinform}>
          <img
            alt="website logo"
            className="logo-large-devices"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <label htmlFor="login">USERNAME</label>
          <input
            onChange={this.onchangeUsername}
            id="login"
            placeholder="Username"
            className="login-input"
            type="input"
          />
          <label htmlFor="Password">PASSWORD</label>
          <input
            onChange={this.onchangePassword}
            id="Password"
            placeholder="Password"
            className="password-input"
            type="password"
          />
          {wrongCredentials && <p className="error-message">*{errorMsg}</p>}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
