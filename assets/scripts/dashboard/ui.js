'use strict'

const publishPostSuccess = function (data) {
  $('#new-post-msg').text('New post created successfully!')
  // need to add message divs
  // show new post in "view" form?
}

const publishPostFailure = function () {
  $('#new-post-msg').text('Something went wrong. New post could not be created.')
}

const publishPageSuccess = function (data) {
  $('#new-page-msg').text('New page created successfully!')
  // need to add message divs
  // show new page in "view" form?
}

const publishPageFailure = function () {
  $('#new-page-msg').text('Something went wrong. New page could not be created.')
}

const getPostsSuccess = function (data) {
  // insert template handlebars here
  // $('#get-posts-content').html(handlebar template)
}

const getPostsFailure = function () {
  $('#get-posts-content').text('Something went wrong. Could not retrieve posts.')
}

const getPostSuccess = function (data) {
  // insert handlebars template here
  // $('#get-post-content').html(handlebar template)
}

const getPostFailure = function () {
  $('#get-post-content').text('Something went wrong. Could not retrieve post.')
}

const deletePostSuccess = function (data) {
  $('#delete-post-content').text('Post deleted successfully.')
}

const deletePostFailure = function () {
  $('#delete-post-content').text('Something went wrong. Post could not be deleted.')
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
  $('#get-pages-content').html()
}

const getPagesFailure = function () {
  $('#get-pages-content').text('something went wrong. Could not get pages.')
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

module.exports = {
  publishPostSuccess,
  publishPostFailure,
  publishPageSuccess,
  publishPageFailure,
  getPostsSuccess,
  getPostsFailure,
  getPostSuccess,
  getPostFailure,
  deletePostSuccess,
  deletePostFailure,
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
  editPageSuccess,
  editPageFailure,
  updatePageSuccess,
  updatePageFailure,
  changePasswordSuccess,
  changePasswordFailure
}
