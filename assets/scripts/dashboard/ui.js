'use strict'
const store = require('../store')
const views = require('../JQviews')
const postListTemplate = require('../templates/post-dash.handlebars')
const pageListTemplate = require('../templates/page-dash.handlebars')
const publicEvents = require('../visitorsite/events')

const publishPostSuccess = function (data) {
  $('#error-success-msg').text('New post created successfully!')
  // console.log('publishPostSuccess data is', data)
  $('#create-post-view input').val(null)
  $('#create-post-view textarea').val(null)
  views.dashboardView()
  // need to add message divs
  // show new post in "view" form?
}

const publishPostFailure = function () {
  $('#error-success-msg').text('Something went wrong. New post could not be created.')
}

const publishPageSuccess = function (data) {
  $('#error-success-msg').text('New page created successfully!')
  // console.log('publishPageSuccess data is', data)
  $('#create-page-view input').val(null)
  $('#create-page-view textarea').val(null)
  views.dashboardView()
  // need to add message divs
  // show new page in "view" form?
}

const publishPageFailure = function () {
  $('#error-success-msg').text('Something went wrong. New page could not be created.')
}

const getPostsSuccess = function (data) {
  data.site.blog.forEach(post => {
    post['createdAt'] = (post['createdAt'].split('T'))[0]
  })
  const showList = postListTemplate({ ps: data.site.blog })
  $('#dash-list-container').html(showList)
  $('#dash-list-header').text('All Blog Posts')
  $('#new-page').removeClass()
  $('#view-posts').addClass('active')
  $('#view-pages').removeClass()
  $('#new-post').removeClass()
  $('#settings').removeClass()
}

const getPostsFailure = function () {
  $('#error-success-msg').text('Something went wrong. Could not retrieve posts.')
}

const deletePostSuccess = function (data) {
  $('#error-success-msg').text('Post deleted successfully.')
}

const deletePostFailure = function () {
  $('#error-success-msg').text('Something went wrong. Post could not be deleted.')
}

const viewPostContent = function (viewPost) {
  views.editPostView()
  $('#edit-post-title').val(viewPost.title)
  $('#edit-post-content').val(viewPost.content)
}
const editPostSuccess = function (data) {
  // insert handlbars here
  $('#error-success-msg').text('Your Page Was Created Successfully')
}

const editPostFailure = function () {
  $('#error-success-msg').text('Something went wrong. Cannot retrieve post for edit.')
}

const updatePostSuccess = function (data) {
  // show updated post in "view" form?
  $('#error-success-msg').text('Post updated successfully!')
}

const updatePostFailure = function (data) {
  $('#error-success-msg').text('Something went wrong. Could not update post.')
}

const getPagesSuccess = function (site) {
  // console.log('pages is', site.pages)
  site.pages.forEach(page => {
    page['createdAt'] = (page['createdAt'].split('T'))[0]
  }
  )
  const showList = pageListTemplate({ pages: site.pages })
  $('#dash-list-container').html(showList)
  $('#dash-list-header').text('All Site Pages')
  $('#new-page').removeClass()
  $('#view-pages').addClass('active')
  $('#view-posts').removeClass()
  $('#new-post').removeClass()
  $('#settings').removeClass()
}

const getPagesFailure = function () {
  $('#error-success-msg').text('something went wrong. Could not get pages.')
}

const getPageFailure = function () {
  $('#error-success-msg').text('something went wrong. Could not get page.')
}

const deletePageSuccess = function (data) {
  $('#error-success-msg').text('Page deleted successfully.')
}

const deletePageFailure = function () {
  $('#error-success-msg').text('Something went wrong. Page could not be deleted.')
}

const viewPageContent = function (viewPage) {
  views.editPageView()
  $('#edit-page-title').val(viewPage.title)
  $('#edit-page-content').val(viewPage.content)
}

const editPageSuccess = function (data) {
  // insert handlbars here
  $('#error-success-msg').text('Page edited successfully')
}

const editPageFailure = function () {
  $('#error-success-msg').text('Something went wrong. Cannot retrieve page for edit.')
}

const updatePageSuccess = function (data) {
  // show updated post in "view" form?
  $('#error-success-msg').text('Page updated successfully!')
}

const updatePageFailure = function (data) {
  $('#error-success-msg').text('Something went wrong. Could not update page.')
}

const changePasswordSuccess = function () {
  $('#error-success-msg').text('Password updated successfully!')
  $('#change-password input').val(null)
  // Show success message to user
}

const changePasswordFailure = function () {
  $('#error-success-msg').text('Failed to update password, please try again.')
  // show failure message to user
}

const changeSiteNameSuccess = function (data) {
  $('#error-success-msg').text('Name Changed Successfully')
  // Show success message to user
}

const changeSiteNameFailure = function () {
  $('#error-success-msg').text('Error on Name Change, please try again.')
  // Show success message to user
}

const getOneSiteSuccess = function (data) {
  // console.log('getOneSiteSuccess data is', data)
  store.site = data.site
  $('#navbar-header').text(store.site.name)
  // Show success message to user
}

const getOneSiteFailure = function () {
  // console.log('getOneSiteFailure error is', error)
  // Show success message to user
}

const destroySiteSuccess = function () {
  store.site = null
  $('#navbar-header').text('')
  $('#error-success-msg').text('Successfully deleted your site')
  // Show success message to user
}

const destroySiteFailure = function () {
  $('#error-success-msg').text('Failed to delete your site. Please try again.')
  // Show success message to user
}

const createSiteSuccess = function (data) {
  store.site = data.site
  // console.log('createSiteSuccess store', store)
  $('#navbar-header').text(store.site.name)
  $('#create-site input:text').val(null)
  views.dashboardView()
  $('#dash-list-container').html('<p>Click the buttons to the left to create your first blog post</p>')
  $('#new-page').removeClass()
  $('#view-posts').addClass('active')
  $('#view-pages').removeClass()
  $('#new-post').removeClass()
  $('#settings').removeClass()
}

const createSiteFailure = function () {
  $('#error-success-msg').text('Failed to create a site, please try again.')
  // Show success message to user
}

const showSite = function () {
  $('#return-to-dash').show()
  publicEvents.loadSite(store.site._id)
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
  createSiteFailure,
  showSite
}
