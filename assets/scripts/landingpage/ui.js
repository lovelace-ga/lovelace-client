'use strict'

// const views = require('../JQviews')
const store = require('../store')
const siteListTemplate = require('../templates/sitelist.handlebars')

const getSitesSuccess = function (data) {
  store.sites = data.sites
  const showSiteList = siteListTemplate({ sites: data.sites })
  $('#site-list').html(showSiteList)
  console.log('getSitesSuccess data is', data)
}

const getSitesFailure = function (error) {
  console.error('getSitesFailure error is', error)
  // show failure message to user
}

module.exports = {
  getSitesSuccess,
  getSitesFailure
}
