'use strict'

const store = require('../store')
const views = require('../JQviews')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./authajax')
const ui = require('./authui')
const apiSite = require('../AJAX/siteajax')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignUp data is', data)
  const siteData = data.site
  console.log('siteData is', siteData)
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
  console.log('onSignIn data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(apiSite.getAllSites)
    .then(ui.getSitesSuccess)
    .then(() => {
      const userId = store.user.id
      const sitesArray = store.sites
      // let siteId
      sitesArray.forEach((site) => {
        if (site._owner === userId) {
          // siteId = site._ownerId
          store.site = site
        }
      })
    })
    .then(() => views.dashboardView())
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
