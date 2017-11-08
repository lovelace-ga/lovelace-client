'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const pageApi = require('../AJAX/pagesajax.js') // UPDATE THIS (change file name)
const postApi = require('../AJAX/postajax') // UPDATE THIS
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
  console.log('onPublishNewPost data is', data)
  event.preventDefault()
  postApi.create(data)
    .then(ui.publishPostSuccess)
    .then(onGetPosts)
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
  console.log('onPublishNewPost data is', data)
  event.preventDefault()
  pageApi.create(data)
    .then(ui.publishPageSuccess)
    .then(onGetPages)
    .catch(ui.publishPageFailure)
}

const onCancelNewPage = function (event) {
  event.preventDefault()
  $('#create-page-view input').val(null)
  $('#create-page-view textarea').val(null)
  views.dashboardView()
}

const onGetPosts = function () {
  // event.preventDefault()
  const siteID = store.site._id
  console.log('site id is', store.site._id)
  siteApi.getOneSite(siteID)
    .then((site) => {
      store.site = site.site
      views.dashboardView()
      ui.getPostsSuccess(site)
    })
  // event.preventDefault()
  // views.dashboardView()
  // postApi.index()
  //   .then(ui.getPostsSuccess) // Handlebars!
  //   .catch(ui.getPostsFailure)
}

const onViewPost = function (event) {
  const postId = event.target.dataset.id
  console.log('onViewPost postId is', postId)
  const blogArray = store.site.blog
  console.log('onViewPost store.site.blog is', store.site.blog)
  let viewPost = ''
  blogArray.forEach((post) => {
    if (postId === post._id) {
      viewPost = post
      console.log('onViewPost in forEach viewPost is', viewPost)
      return viewPost
    }
  })
  ui.viewPostContent(viewPost)
}

const onDeletePost = function (event) {
  event.preventDefault()
  const postForDelete = event.target.dataset.id
  postApi.destroy(postForDelete)
    .then(onGetPosts)
    .then(() => {
      console.log('is this running - after destroy to update success message.')
      $('#error-success-msg').text('Post deleted successfully.')
    })
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
  views.dashboardView()
}

const onGetPages = function (event) {
  const siteID = store.site._id
  console.log('site id is', store.site._id)
  siteApi.getOneSite(siteID)
    .then((site) => {
      store.site = site.site
      console.log('site in store is', store.site)
      views.dashboardView()
      ui.getPagesSuccess(site.site)
    })

  // event.preventDefault()
  //
  // const siteID = store.site.id
  // console.log('clicked pages', siteID)
  // siteApi.getOneSite(siteID)
  //   .then(ui.getPagesSuccess)
}

const onViewPage = function (event) {
  const pageId = event.target.dataset.id
  console.log('onViewPage pageId is', pageId)
  const pagesArray = store.site.pages
  console.log('onViewPage store.site.pages is', store.site.pages)
  let viewPage = ''
  pagesArray.forEach((page) => {
    if (pageId === page._id) {
      viewPage = page
      console.log('onViewPage in forEach viewPage is', viewPage)
      return viewPage
    }
  })
  ui.viewPageContent(viewPage)
}

const onDeletePage = function (event) {
  event.preventDefault()
  const pageForDelete = event.target.dataset.id
  pageApi.destroy(pageForDelete)
    .then(onGetPages)
    .then(() => {
      console.log('is this running - after destroy to update success message.')
      $('#error-success-msg').text('Page deleted successfully.')
    })
    .catch(ui.deletePageFailure)

  // event.preventDefault()
  // const pageForDelete = $(this).parent.attr('data-id')
  // pageApi.destroy(pageForDelete)
  //   .then(ui.deletePageSuccess)
  //   .catch(ui.deletePageFailure)
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
  // New Post
  $('#new-post').on('click', onNewPost)
  $('#create-post').on('submit', onPublishNewPost)
  $('#cancel-create-post').on('click', onCancelNewPost)
  // New Page
  $('#new-page').on('click', onNewPage)
  $('#create-page').on('submit', onPublishNewPage)
  $('#cancel-create-page').on('click', onCancelNewPage)
  // View all posts
  $('#view-posts').on('click', onGetPosts)
  $(document).on('click', '.edit-post', onViewPost)
  $('#update-post').on('submit', onUpdatePost) // DOES NOT EXIST
  $('#cancel-edit-post').on('click', onCancelUpdatePost)
  $(document).on('click', '.delete-post', (event) => {
    $('#confirm-delete-post').attr('data-id', event.target.dataset.id)
  })

  $('#confirm-delete-post').on('click', onDeletePost)
  $(document).on('click', '.delete-page', (event) => {
    console.log('setting the button id', event.target.dataset.id)
    $('#confirm-delete-page').attr('data-id', event.target.dataset.id)
  })
  $('#confirm-delete-page').on('click', onDeletePage)
  $('#edit-post').on('click', onEditPost) // DOES NOT EXIST (Handlebars) - will be <a>?
  $('#update-post').on('submit', onUpdatePost) // DOES NOT EXIST
  $('#cancel-update-post').on('click', onCancelUpdatePost) // DOES NOT EXIST

  // View all pages
  $('#view-pages').on('click', onGetPages) // DOES NOT EXIST - what is "presentation role"?
  $('#edit-page').on('click', onEditPage) // DOES NOT EXIST
  $(document).on('click', '.edit-page', onViewPage)
  $('#update-page').on('submit', onUpdatePage) // DOES NOT EXIST
  $('#cancel-edit-page').on('click', onCancelUpdatePage) // DOES
  $('#delete-page').on('submit', onDeletePage) // DOES NOT EXIST - <a>?
  // Settings
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
