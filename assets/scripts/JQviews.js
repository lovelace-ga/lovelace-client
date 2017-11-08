'use strict'

const store = require('./store')

const landingPageView = function () {
  $('#site-list').show()
  $('#sign-in-div').show()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#sign-out-link').hide()
  $('#return-to-landing').hide()
  $('#return-to-dash').hide()
  // $('#navbar-hamburger').hide()
  $('#dash-nav').hide()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-post-view').hide()
  $('#create-page-view').hide()
  $('#public-nav').hide()
  $('#public-posts').hide()
  $('#public-site-page').hide()
  $('#error-success-msg').text('')
  $('#settings-view').hide()
  $('#navbar-header').text('Lovelace')
}

const dashboardView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#return-to-dash').hide()
  $('#return-to-landing').show()
  $('#dash-nav').show()
  $('#dashboard-list').show()
  $('#edit-view').hide()
  $('#create-post-view').hide()
  $('#create-page-view').hide()
  $('#public-nav').hide()
  $('#public-posts').hide()
  $('#public-site-page').hide()
  $('#sign-out-link').show()
  $('#error-success-msg').text('')
  $('#settings-view').hide()
  $('#navbar-header').text(store.site.name)
}

const createPostView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#return-to-dash').hide()
  $('#dash-nav').show()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-post-view').show()
  $('#create-page-view').hide()
  $('#public-nav').hide()
  $('#error-success-msg').text('')
  $('#public-posts').hide()
  $('#settings-view').hide()
}

const createPageView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#return-to-dash').hide()
  $('#dash-nav').show()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-post-view').hide()
  $('#create-page-view').show()
  $('#public-nav').hide()
  $('#public-posts').hide()
  $('#settings-view').hide()
}

const editView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#return-to-dash').hide()
  $('#dash-nav').show()
  $('#dashboard-list').hide()
  $('#edit-view').show()
  $('#create-post-view').hide()
  $('#create-page-view').hide()
  $('#public-nav').hide()
  $('#public-posts').hide()
  $('#settings-view').hide()
}

const settingsView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#dash-nav').show()
  $('#return-to-dash').hide()
  $('#settings-view').show()
  $('#update-site-name input:text').val(store.site.name)
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-post-view').hide()
  $('#create-page-view').hide()
  $('#public-nav').hide()
  $('#error-success-msg').text('')
  $('#public-posts').hide()
}

const publicView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('#app-nav-bar').show()
  $('#return-to-landing').show()
  $('#dash-nav').hide()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-post-view').hide()
  $('#create-page-view').hide()
  $('#public-nav').show()
  $('#public-posts').show()
  $('#site-page-header').text('')
  $('#site-page-content').text('')
  $('#public-site-page').show()
  $('#error-success-msg').text('')
  $('#settings-view').hide()
}
module.exports = {
  landingPageView,
  dashboardView,
  editView,
  createPostView,
  createPageView,
  publicView,
  settingsView
}
