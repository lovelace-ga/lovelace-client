'use strict'
const store = require('../store')
const views = require('../JQviews')
const pagePostTemplate = require('../templates/page-post-dash.handlebars')

const publishPostSuccess = function (data) {
  $('#new-post-msg').text('New post created successfully!')
  console.log('publishPostSuccess data is', data)
  $('#create-post-view input').val(null)
  $('#create-post-view textarea').val(null)
  views.dashboardView()
  // need to add message divs
  // show new post in "view" form?
}

const publishPostFailure = function () {
  $('#new-post-msg').text('Something went wrong. New post could not be created.')
}

const publishPageSuccess = function (data) {
  $('#new-page-msg').text('New page created successfully!')
  console.log('publishPageSuccess data is', data)
  $('#create-page-view input').val(null)
  $('#create-page-view textarea').val(null)
  views.dashboardView()
  // need to add message divs
  // show new page in "view" form?
}

const publishPageFailure = function () {
  $('#new-page-msg').text('Something went wrong. New page could not be created.')
}

const getPostsSuccess = function (data) {
  // insert template handlebars here
  const showList = pagePostTemplate({ ps: data.blog })
  $('#dash-list-container').html(showList)
  $('#dash-list-header').text('All Blog Posts')
  $('#new-page').removeClass()
  $('#view-posts').addClass('active')
  $('#view-pages').removeClass()
  $('#new-post').removeClass()
  $('#settings').removeClass()
}

const getPostsFailure = function () {
  $('#dash-list-header').text('Something went wrong. Could not retrieve posts.')
}

const deletePostSuccess = function (data) {
  $('#error-success-msg').text('Post deleted successfully.')
}

const deletePostFailure = function () {
  $('#error-success-msg').text('Something went wrong. Post could not be deleted.')
}

const viewPostContent = function (viewPost) {
  views.editPostView()
  $('#edit-post-view input').val(viewPost.title)
  $('#edit-post-view textarea').val(viewPost.content)
}
const editPostSuccess = function (data) {
  // insert handlbars here
  $('#edit-post-content').html()
}

const editPostFailure = function () {
  $('#edit-post-content').text('Something went wrong. Cannot retrieve post for edit.')
}

const updatePostSuccess = function (data) {
  // show updated post in "view" form?
  $('#update-post-content').text('Post updated successfully!')
}

const updatePostFailure = function (data) {
  $('#update-post-content').text('Something went wrong. Could not update post.')
}

const getPagesSuccess = function (data) {
  // insert handlebars here
  const showList = pagePostTemplate({ ps: data.pages })
  $('#dash-list-container').html(showList)
  $('#dash-list-header').text('All Site Pages')
  $('#new-page').removeClass()
  $('#view-pages').addClass('active')
  $('#view-posts').removeClass()
  $('#new-post').removeClass()
  $('#settings').removeClass()
}

const getPagesFailure = function () {
  $('#dash-list-header').text('something went wrong. Could not get pages.')
}

const getPageSuccess = function (data) {
  // insert handlbars here
  $('#get-page-content').html()
}

const getPageFailure = function () {
  $('#get-page-content').text('something went wrong. Could not get page.')
}

const deletePageSuccess = function (data) {
  $('#delete-page-content').text('Page deleted successfully.')
}

const deletePageFailure = function () {
  $('#delete-page-content').text('Something went wrong. Page could not be deleted.')
}

const viewPageContent = function (viewPage) {
  views.editPageView()
  $('#edit-page-view input').val(viewPage.title)
  $('#edit-page-view textarea').val(viewPage.content)
}

const editPageSuccess = function (data) {
  // insert handlbars here
  $('#edit-page-content').html()
}

const editPageFailure = function () {
  $('#edit-page-content').text('Something went wrong. Cannot retrieve page for edit.')
}

const updatePageSuccess = function (data) {
  // show updated post in "view" form?
  $('#update-page-content').text('Page updated successfully!')
}

const updatePageFailure = function (data) {
  $('#update-page-content').text('Something went wrong. Could not update page.')
}

const changePasswordSuccess = function () {
  console.log('Changed Password successfully!')
  $('#change-password input').val(null)
  // Show success message to user
}

const changePasswordFailure = function (error) {
  console.log('changePasswordFailure error is', error)
  // show failure message to user
}

const changeSiteNameSuccess = function (data) {
  // Show success message to user
}

const changeSiteNameFailure = function (error) {
  console.log('changeSiteNameFailure error is', error)
  // Show success message to user
}

const getOneSiteSuccess = function (data) {
  console.log('getOneSiteSuccess data is', data)
  store.site = data.site
  $('#navbar-header').text(store.site.name)
  // Show success message to user
}

const getOneSiteFailure = function (error) {
  console.log('getOneSiteFailure error is', error)
  // Show success message to user
}

const destroySiteSuccess = function () {
  store.site = {}
  $('#navbar-header').text('')
  // Show success message to user
}

const destroySiteFailure = function (error) {
  console.log('destroySiteFailure error is', error)
  // Show success message to user
}

const createSiteSuccess = function (data) {
  store.site = data.site
  console.log('createSiteSuccess store', store)
  $('#navbar-header').text(store.site.name)
  $('#create-site input:text').val(null)
  views.dashboardView()
  // Show success message to user
}

const createSiteFailure = function (error) {
  console.log('createSiteFailure error is', error)
  // Show success message to user
}

module.exports = {
  publishPostSuccess,
  publishPostFailure,
  publishPageSuccess,
  publishPageFailure,
  getPostsSuccess,
  getPostsFailure,
  deletePostSuccess,
  deletePostFailure,
  viewPostContent,
  editPostSuccess,
  editPostFailure,
  updatePostSuccess,
  updatePostFailure,
  getPagesSuccess,
  getPagesFailure,
  getPageSuccess,
  getPageFailure,
  deletePageSuccess,
  deletePageFailure,
  viewPageContent,
  editPageSuccess,
  editPageFailure,
  updatePageSuccess,
  updatePageFailure,
  changePasswordSuccess,
  changePasswordFailure,
  changeSiteNameSuccess,
  changeSiteNameFailure,
  getOneSiteSuccess,
  getOneSiteFailure,
  destroySiteSuccess,
  destroySiteFailure,
  createSiteSuccess,
  createSiteFailure
}
