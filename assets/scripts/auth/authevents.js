'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./authajax')
const ui = require('./authui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignUp data is', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then(() => api.signIn(data))
    // .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignIn data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out-link').on('click', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-up-link').on('click', onShowSignUp)
  // $('#sign-in-link').on('click', onShowSignIn)
}

module.exports = {
  addHandlers
}
