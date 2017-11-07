'use strict'
const siteAjax = require('../AJAX/siteajax')
const siteListTemplate = require('../templates/sitelist.handlebars')

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

module.exports = {
  listAllSites
}
