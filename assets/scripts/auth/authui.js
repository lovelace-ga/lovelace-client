'use strict'

const views = require('../JQviews')
const store = require('../store')
const landingEvents = require('../landingpage/events')

const signUpSuccess = function (data) {
  // console.log('signUpSuccess data is', data)
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
  $('#error-success-msg').text('')
}

const signUpFailure = function () {
  $('#error-success-msg').text('Something went wrong. Please try again.')
  // show failure message to user
}

const signInSuccess = function (data) {
  // console.log('signInSuccess data is', data)
  $('#sign-in input:text').val(null)
  $('#sign-in input:password').val(null)
  store.user = data.user
  $('#error-success-msg').text('')

  // show success message to user
}

const signInFailure = function () {
  $('#error-success-msg').text('Something went wrong. Please try again.')
  // show failure message to user
}

const signOutSuccess = function () {
  $('#error-success-msg').text('Logged Out Successfully')
  store.site = null
  store.sites = null
  store.user = null
  // console.log('signOutSuccess store is', store)
  landingEvents.listAllSites()
  views.landingPageView()
  // Show success message to user
}

const signOutFailure = function () {
  $('#error-success-msg').text('There was an error signing out. Please try again.')
  // Show failure message to user
}

const createSiteSuccess = function (data) {
  store.site = data.site
  // console.log('createSiteSuccess data is', data)
  // console.log('store.site is', store.site)
  views.dashboardView()
  $('#dash-list-container').html('<p>Click the buttons to the left to create your first blog post</p>')
  $('#error-success-msg').text('')

  // show success message to user
}

const createSiteFailure = function () {
  $('#error-success-msg').text('There was an error creating your site.')
  // show failure message to user
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createSiteSuccess,
  createSiteFailure
}
