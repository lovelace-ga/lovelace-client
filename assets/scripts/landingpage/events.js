'use strict'
const siteAjax = require('../AJAX/siteajax')
const landingUi = require('./ui')
const visitorEvents = require('../visitorsite/events')

const listAllSites = function () {
  // event.preventDefault() // I think this isn't needed
  siteAjax.getAllSites()
    .then(landingUi.getSitesSuccess)
    .catch(landingUi.getSitesFailure)
}

const showSignIn = function () {
  $('#sign-in-div').show()
  $('#sign-up-div').hide()
}
const showSignUp = function () {
  $('#sign-up-div').show()
  $('#sign-in-div').hide()
}
const addHandlers = function () {
  $(document).on('click', '.site-link', (event) => {
    const siteId = event.target.dataset.id
    visitorEvents.loadSite(siteId)
  })
  $('#sign-in-link').on('click', showSignIn)
  $('#sign-up-link').on('click', showSignUp)
}
module.exports = {
  listAllSites,
  addHandlers
}
