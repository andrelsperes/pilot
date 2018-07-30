import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import { compose } from 'ramda'
import { connect } from 'react-redux'

import LoginForm from '../../../containers/Account/LoginForm'

import { requestLogin } from '../actions'

import buildParamErrors from './buildParamErrors'

import environment from '../../../environment'

const mapStateToProps = (state) => {
  const {
    account: {
      error,
      loading,
      token,
    },
  } = state

  return {
    error,
    loading,
    token,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (data) => {
    dispatch(requestLogin({ ...data, environment }))
  },
})

const enhanced = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  translate(),
  withRouter
)

const renderProps = props => <LoginForm {...props} />

class LoginPage extends PureComponent {
  // eslint-disable-next-line class-methods-use-this
  handlePasswordRecovery (e) {
    e.preventDefault()
    window.location = 'https://dashboard.pagar.me/#/forgot_password'
  }

  render () {
    return renderProps({
      ...this.props,
      errors: buildParamErrors(this.props.error),
      onPasswordRecovery: this.handlePasswordRecovery,
    })
  }
}

LoginPage.propTypes = {
  t: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

LoginPage.defaultProps = {
  error: null,
  loading: false,
}

export default enhanced(LoginPage)
