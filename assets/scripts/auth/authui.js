'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signUpSuccess data is', data)
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
}

const signUpFailure = function (error) {
  console.error('signUpFailure error is', error)
  // show failure message to user
}

const signInSuccess = function (data) {
  console.log('signInSuccess data is', data)
  $('#sign-in input:text').val(null)
  $('#sign-in input:password').val(null)
  store.user = data.user
  // hide Landing Page
  // show Dashboard
  // show success message to user
}

const signInFailure = function (error) {
  console.log('signInFailure error is', error)
  // show failure message to user
}

const signOutSuccess = function () {
  console.log('Signed Out successfully!')
  store.user = null
  console.log(store.user)
  // Hide logout link
  // Hide Dashboard
  // Show Landing Page
  // Show success message to user
}

const signOutFailure = function (error) {
  console.log('signOutFailure error is', error)
  // Show failure message to user
}

const changePasswordSuccess = function () {
  console.log('Changed Password successfully!')
  $('#change-password input').val(null)
  // Show success message to user
}

const changePasswordFailure = function (error) {
  console.log('changePasswordFailure error is', error)
  // show failure message to user
}

const createSiteSuccess = function (data) {
  console.log('createSiteSuccess data is', data)
  // hide Landing Page
  // show Dashboard
  // show success message to user
}

const createSiteFailure = function (error) {
  console.log('changeSiteFailure error is', error)
  // show failure message to user
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createSiteSuccess,
  createSiteFailure
}
