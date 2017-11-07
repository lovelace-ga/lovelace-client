'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signUpSuccess data is', data)
  $('#sign-up-div').hide()
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
  $('#sign-in-div').show()
}

const signUpFailure = function (error) {
  console.error('signUpFailure error is', error)
}

const signInSuccess = function (data) {
  console.log('signInSuccess data is', data)
  store.user = data.user
}

const signInFailure = function (error) {
  console.log('signInFailure error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
