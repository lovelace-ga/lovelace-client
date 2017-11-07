'use strict'
const siteAjax = require('../AJAX/siteajax')
const siteListTemplate = require('../templates/sitelist.handlebars')
const visitorEvents = require('../visitorsite/events')

const getSitesSuccess = function (data) {
  const showSiteList = siteListTemplate({ sites: data.sites })
  $('#site-list').html(showSiteList)
}

const listAllSites = function () {
  // event.preventDefault() // I think this isn't needed
  siteAjax.getAllSites()
    .then(getSitesSuccess)
    .catch((err) => {
      console.log('failed to get sites', err)
    })
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
