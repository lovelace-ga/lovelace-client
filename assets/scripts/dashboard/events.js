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
  onGetPosts()
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
  onGetPages()
}

const onGetPosts = function () {
  if (event !== undefined) {
    event.preventDefault()
  }
  const siteID = store.site._id
  console.log('site id is', store.site._id)
  siteApi.getOneSite(siteID)
    .then((site) => {
      store.site = site.site
      views.dashboardView()
      ui.getPostsSuccess(site)
    })
}

const onViewPost = function (event) {
  const postId = event.target.dataset.id
  $('#post-id').val(postId)
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
const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdatePost data is ', data)
  postApi.update(data)
    .then(ui.updatePostSuccess)
    .then(onGetPosts)
    .catch(ui.updatePostFailure)
}

const onCancelUpdatePost = function (event) {
  event.preventDefault()
  onGetPosts()
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
  $('#page-id').val(pageId)
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

const onUpdatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdatePost data is ', data)
  pageApi.update(data)
    .then(ui.updatePageSuccess)
    .then(onGetPages)
    .catch(ui.updatePageFailure)
}

const onCancelUpdatePage = function (event) {
  event.preventDefault()
  onGetPages()
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
  $('#view-site').on('click', ui.showSite)
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
  $('#edit-post').on('submit', onUpdatePost) // DOES NOT EXIST
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
  $('#cancel-update-post').on('click', onUpdatePage) // DOES NOT EXIST

  // View all pages
  $('#view-pages').on('click', onGetPages) // DOES NOT EXIST - what is "presentation role"?
  $(document).on('click', '.edit-page', onViewPage)
  $('#edit-page').on('submit', onUpdatePage) // DOES NOT EXIST
  $('#cancel-edit-page').on('click', onCancelUpdatePage) // DOES
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
