'use strict'
const store = require('../store')
const views = require('../JQviews')
// const landingEvents = require('../landingpage/events')
const siteAjax = require('../AJAX/siteajax')
const landingUi = require('../landingpage/ui')
// const postAjax = require('../AJAX/postajax')

const ui = require('./ui')

const loadSite = function (siteId) {
  siteAjax.getOneSite(siteId)
    .then(ui.loadSiteSuccess)
    .then(ui.showPublicPages)
    .then(ui.showPublicPosts)
    .catch(ui.loadSiteFailure) // need error handling
}

const readMore = function (event) {
  let newContent = ''
  const postId = event.target.dataset.id
  const siteId = store.publicSite.id
  siteAjax.getOneSite(siteId)
    .then((siteData) => {
      return siteData.site
    })
    .then((data) => {
      const blogArray = data.blog
      blogArray.forEach((post) => {
        if (post.id === postId) { // finds post with id matching data-id from read more button
          newContent = post.content
        }
      })
      return newContent
    })
    .then((newContent) => {
      $(event.target).prev().text(newContent)
      $(event.target).next().show() // shows 'read less' link
      $(event.target).hide() // hides 'read more' link
    })
}

const readLess = function (event) {
  const newContent = $(event.target).prev().prev().text().substring(0, 150)
  $(event.target).prev().prev().text(newContent)
  $(event.target).prev().show() // shows 'read more' link
  $(event.target).hide() // hides 'read less' link
}
const getPageContent = function (event) {
  const pageId = event.target.dataset.id
  // console.log('event.target', event.target.dataset.id)
  const pageArray = store.publicSite.pages
  let pageData = ''
  pageArray.forEach((page) => {
    if (page.id === pageId) { // finds page with id matching data-id from button
      pageData = page
    }
  })
  ui.showPageContent(pageData)
}

const onReturnToDash = function (event) {
  if (!store.site) {
    views.createSiteView()
  } else {
    $('#new-page').removeClass()
    $('#view-posts').addClass('active')
    $('#view-pages').removeClass()
    $('#new-post').removeClass()
    $('#settings').removeClass()
    views.dashboardView()
  }
}
const listAllSites = function () {
  // event.preventDefault() // I think this isn't needed
  siteAjax.getAllSites()
    .then(landingUi.getSitesSuccess)
    .catch(landingUi.getSitesFailure)
}

const addHandlers = function () {
  $('#return-to-landing').on('click', () => {
    listAllSites()
    views.landingPageView()
    if (store.user) {
      $('#return-to-dash').show()
      $('#sign-out-link').show()
      $('#sign-in-div').hide()
      $('#sign-up-div').hide()
    }
  })
  $('#return-to-dash').on('click', onReturnToDash)

  $(document).on('click', '.read-more', readMore)
  $(document).on('click', '.read-less', readLess)
  $(document).on('click', '.page-button', getPageContent)
  $(document).on('click', '#blog-button', () => {
    loadSite(store.site.id)
  })
}
module.exports = {
  loadSite,
  addHandlers
}
