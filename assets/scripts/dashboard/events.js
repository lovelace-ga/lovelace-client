'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const pageApi = require('../AJAX/pagesajax.js') // UPDATE THIS (change file name)
const postApi = require('../AJAX/postajax.js') // UPDATE THIS
const authApi = require('../auth/authajax')
const siteApi = require('../AJAX/siteajax')
const ui = require('./ui')
const views = require('../JQviews')

const onNewPost = function (event) {
  event.preventDefault()
  views.createPostView()
}

const onPublishNewPost = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  postApi.create(data)
    .then(ui.publishPostSuccess)
    .catch(ui.publishPostFailure)
}

const onCancelNewPost = function (event) {
  event.preventDefault()
  $('#create-post-view input').val(null)
  $('#create-post-view textarea').val(null)
  views.dashboardView()
}

const onNewPage = function (event) {
  event.preventDefault()
  views.createPageView()
}

const onPublishNewPage = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  pageApi.create(data)
    .then(ui.publishPageSuccess)
    .catch(ui.publishPageFailure)
}

const onCancelNewPage = function (event) {
  event.preventDefault()
  $('#create-page-view input').val(null)
  $('#create-page-view textarea').val(null)
  views.dashboardView()
}

const onGetPosts = function () {
  const site = store.site
  console.log('clicked posts', site)
  views.dashboardView()
  ui.getPostsSuccess(site)

  // event.preventDefault()
  // views.dashboardView()
  // postApi.index()
  //   .then(ui.getPostsSuccess) // Handlebars!
  //   .catch(ui.getPostsFailure)
}

// for if we decide to view post
const onViewPost = function (event) {
  event.preventDefault()
  views.editView()
  const selectedPost = $(this).parent.attr('data-id') // stored in handlebar
  postApi.show(selectedPost)
    .then(ui.getPostSuccess)
    .catch(ui.getPostFailure)
}

const onDeletePost = function (event) {
  event.preventDefault()
  console.log('is this running?')
  const postForDelete = event.target.dataset.id
  postApi.destroy(postForDelete)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}

// based on "edit" button in view posts list
// comes with "Update" and "Cancel" buttons
const onEditPost = function (event) {
  event.preventDefault()
  const postForEdit = $(this).parent.attr('data-id') // stored in handlebar
  postApi.show(postForEdit)
    .then(ui.editPostSuccess) // brings up the edit page with pre-filled data
    .catch(ui.editPostFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  postApi.update(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

const onCancelUpdatePost = function (event) {
  event.preventDefault()
  // back to main dashboard view
  // clear out "Title" and "Content" fields with .text('')
  // note: this will not update the post with cleared out values.
}

const onGetPages = function (event) {
  event.preventDefault()
  const site = store.site
  console.log('clicked pages', site)
  views.dashboardView()
  ui.getPagesSuccess(site)

  // event.preventDefault()
  // views.dashboardView()
  // pageApi.index()
  //   .then(ui.getPagesSuccess) // Handlebars!
  //   .catch(ui.getPagesFailure)
}

// for if we decide to view page
const onViewPage = function (event) {
  event.preventDefault()
  const selectedPage = $(this).parent.attr('data-id') // stored in handlebar
  pageApi.show(selectedPage)
    .then(ui.getPageSuccess)
    .catch(ui.getPageFailure)
}

const onDeletePage = function (event) {
  event.preventDefault()
  const pageForDelete = $(this).parent.attr('data-id')
  pageApi.destroy(pageForDelete)
    .then(ui.deletePageSuccess)
    .catch(ui.deletePageFailure)
}

// based on "edit" button in view posts list
// comes with "Update" and "Cancel" buttons
const onEditPage = function (event) {
  event.preventDefault()
  const pageForEdit = $(this).parent.attr('data-id') // stored in handlebar
  pageApi.show(pageForEdit)
    .then(ui.editPageSuccess) // brings up the edit page with pre-filled data
    .catch(ui.editPageFailure)
}

const onUpdatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  pageApi.update(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

const onCancelUpdatePage = function (event) {
  event.preventDefault()
  // back to main dashboard view
  // clear out "Title" and "Content" fields with .text('')
  // note: this will not update the page with cleared out values.
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  console.log('onChangePassword data is', data)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onChangeSiteName = function (event) {
  const data = getFormFields(event.target)
  console.log('onChangeSiteName data is', data)
  event.preventDefault()
  console.log('onChangeSiteName store.site.id is', store.site._id)
  siteApi.updateSite(data)
    .then(ui.changeSiteNameSuccess)
    .then(() => siteApi.getOneSite(store.site._id))
    .then(ui.getOneSiteSuccess)
    .catch(ui.changeSiteNameFailure)
    .catch(ui.getOneSiteFailure)
}

const onViewSettings = function (event) {
  event.preventDefault()
  views.settingsView()
}

const onDeleteSite = function (event) {
  event.preventDefault()
  siteApi.destroySite()
    .then(ui.destroySiteSuccess)
    .then(() => views.createSiteView())
    .catch(ui.destroySiteFailure)
}

const onCreateSite = function (event) {
  const data = getFormFields(event.target)
  console.log('onCreateSite data is', data)
  event.preventDefault()
  siteApi.createSite(data.site)
    .then(ui.createSiteSuccess)
    .catch(ui.createSiteFailure)
}
const addHandlers = function () {
  $('#new-post').on('click', onNewPost)
  $('#publish-new-post').on('submit', onPublishNewPost)
  $('#cancel-create-post').on('click', onCancelNewPost)
  $('#new-page').on('click', onNewPage)
  $('#publish-new-page').on('submit', onPublishNewPage) // DOES NOT EXIST YET
  $('#cancel-create-page').on('click', onCancelNewPage)
  $('#view-posts').on('click', onGetPosts)
  $('#view-post').on('submit', onViewPost) // DOES NOT EXIST
  $(document).on('click', '.delete-post', (event) => {
    $('#confirm-delete-post').attr('data-id', event.target.dataset.id)
  })
  $('#confirm-delete-post').on('click', onDeletePost) // DOES NOT EXIST - <a>?
  $('#edit-post').on('click', onEditPost) // DOES NOT EXIST (Handlebars) - will be <a>?
  $('#update-post').on('submit', onUpdatePost) // DOES NOT EXIST
  $('#cancel-update-post').on('click', onCancelUpdatePost) // DOES NOT EXIST

  $('#view-pages').on('click', onGetPages) // DOES NOT EXIST - what is "presentation role"?
  $('#view-page').on('submit', onViewPage) // DOES NOT EXIST
  $('#delete-page').on('submit', onDeletePage) // DOES NOT EXIST - <a>?
  $('#edit-page').on('click', onEditPage) // DOES NOT EXIST
  $('#update-page').on('submit', onUpdatePage) // DOES NOT EXIST
  $('#cancel-update-page').on('click', onCancelUpdatePage) // DOES NOT EXIST
  $('#settings').on('click', onViewSettings)
  $('#change-password').on('submit', onChangePassword)
  $('#update-site-name').on('submit', onChangeSiteName)
  $('#delete-site').on('click', onDeleteSite)
  $('#create-site').on('submit', onCreateSite)
}

module.exports = {
  addHandlers,
  onGetPosts
}
