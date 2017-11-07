'use strict'

const landingPageView = function () {
  $('#site-list').show()
  $('#sign-in-div').show()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').hide()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-view').hide()
  $('#public-nav').hide()
  $('#dashboard-posts').hide()
  $('#sign-out-link').hide()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
  $('#navbar-header').text('Lovelace')
}

const dashboardView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').show()
  $('#dashboard-list').show()
  $('#edit-view').hide()
  $('#create-view').hide()
  $('#public-nav').hide()
  $('#dashboard-posts').hide()
  $('#sign-out-link').show()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
}

const createView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').show()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-view').show()
  $('#public-nav').hide()
  $('#dashboard-posts').hide()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
}

const editView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').show()
  $('#dashboard-list').hide()
  $('#edit-view').show()
  $('#create-view').hide()
  $('#public-nav').hide()
  $('#dashboard-posts').hide()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
}

const settingsView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').show()
  $('#settingsView').show()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-view').hide()
  $('#public-nav').hide()
  $('#dashboard-posts').hide()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
}

const publicView = function () {
  $('#site-list').hide()
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  $('app-nav-bar').show()
  $('#dash-nav').hide()
  $('#dashboard-list').hide()
  $('#edit-view').hide()
  $('#create-view').hide()
  $('#public-nav').show()
  $('#dashboard-posts').show()
  $('#sign-out-link').hide()
  $('#change-password-div').hide()
  $('#change-site-name-div').hide()
}
module.exports = {
  landingPageView,
  dashboardView,
  editView,
  createView,
  publicView,
  settingsView
}
