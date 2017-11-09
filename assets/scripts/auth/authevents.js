'use strict'

const store = require('../store')
const views = require('../JQviews')
const dashEvents = require('../dashboard/events')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./authajax')
const ui = require('./authui')
const apiSite = require('../AJAX/siteajax')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // // console.log('onSignUp data is', data)
  const siteData = data.site
  // // console.log('siteData is', siteData)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => api.signIn(data))
    .then(ui.signInSuccess)
    .then(() => apiSite.createSite(siteData))
    .then(ui.createSiteSuccess)
    .catch(ui.signUpFailure)
    .catch(ui.signInFailure)
    .catch(ui.createSiteFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // // console.log('onSignIn data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => {
      // console.log('onSignIn store.user.id', store.user.id)
      const sitesArray = store.sites
      // console.log('onSignIn store.sites is', store.sites)
      sitesArray.forEach((site) => {
        if (store.user.id === site._owner) {
          store.site = site
          // console.log('onSignIn store.site is', store.site)
          dashEvents.onGetPosts()
        }
      })
      if (!store.site) {
        views.createSiteView()
      }
    })
    .catch(ui.signInFailure)
    .catch(ui.getSitesFailure)
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
}

module.exports = {
  addHandlers
}
