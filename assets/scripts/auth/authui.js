'use strict'

const views = require('../JQviews')
const store = require('../store')
const landingEvents = require('../landingpage/events')

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
  landingEvents.listAllSites()
  views.landingPageView()
  // Show success message to user
}

const signOutFailure = function (error) {
  console.log('signOutFailure error is', error)
  // Show failure message to user
}

const createSiteSuccess = function (data) {
  store.site = data.site
  console.log('createSiteSuccess data is', data)
  console.log('store.site is', store.site)
  views.dashboardView()
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
  createSiteSuccess,
  createSiteFailure
}
