'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const pageApi = require('../AJAX/pagesajax') // UPDATE THIS (change file name)
const postApi = require('../AJAX/postajax.js') // UPDATE THIS
const ui = require('./ui')

const onNewPost = function (event) {
  event.preventDefault()
  // show hide a bunch of stuff
  // show empty title/content post form (need to add!)
  // need to add 'new-post' div
  // will have buttons "Publish" and "Cancel"
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
  // go back to dashboard view
  // clear 'Title' text with .text('')
  // clear 'Content' text with .text('')
}

const onNewPage = function (event) {
  event.preventDefault()
  // show hide a bunch of stuff
  // show empty title/content post form (need to add!)
  // will have buttons "Publish" and "Cancel"
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
  // go back to main dashboard view
  // clear 'Title' text with .text('')
  // clear 'Content' text with .text('')
}

const onGetPosts = function (event) {
  event.preventDefault()
  postApi.index()
    .then(ui.getPostsSuccess) // Handlebars!
    .catch(ui.getPostsFailure)
}

// for if we decide to view post
const onViewPost = function (event) {
  event.preventDefault()
  const selectedPost = $(this).parent.attr('data-id') // stored in handlebar
  postApi.show(selectedPost)
    .then(ui.getPostSuccess)
    .catch(ui.getPostFailure)
}

const onDeletePost = function (event) {
  event.preventDefault()
  const postForDelete = $(this).parent.attr('data-id')
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
  pageApi.index()
    .then(ui.getPagesSuccess) // Handlebars!
    .catch(ui.getPagesFailure)
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

const addHandlers = function () {
  $('#new-post').on('click', onNewPost)
  $('#publish-new-post').on('submit', onPublishNewPost) // DOES NOT EXIST YET
  $('#cancel-new-post').on('click', onCancelNewPost) // DOES NOT EXIST YET

  $('#new-page').on('click', onNewPage) // DOES NOT EXIST YET
  $('#publish-new-page').on('submit', onPublishNewPage) // DOES NOT EXIST YET
  $('#cancel-new-page').on('click', onCancelNewPage) // DOES NOT EXIST YET

  $('#view-posts').on('submit', onGetPosts) // DOES NOT EXIST - what is "presentation role"?
  $('#view-post').on('submit', onViewPost) // DOES NOT EXIST
  $('#delete-post').on('submit', onDeletePost) // DOES NOT EXIST - <a>?
  $('#edit-post').on('click', onEditPost) // DOES NOT EXIST (Handlebars) - will be <a>?
  $('#update-post').on('submit', onUpdatePost) // DOES NOT EXIST
  $('#cancel-update-post').on('click', onCancelUpdatePost) // DOES NOT EXIST

  $('#view-pages').on('submit', onGetPages) // DOES NOT EXIST - what is "presentation role"?
  $('#view-page').on('submit', onViewPage) // DOES NOT EXIST
  $('#delete-page').on('submit', onDeletePage) // DOES NOT EXIST - <a>?
  $('#edit-page').on('click', onEditPage) // DOES NOT EXIST
  $('#update-page').on('submit', onUpdatePage) // DOES NOT EXIST
  $('#cancel-update-page').on('click', onCancelUpdatePage) // DOES NOT EXIST
}

module.exports = {
  addHandlers
}
