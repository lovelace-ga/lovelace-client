'use strict'
const store = require('../store')

const siteAjax = require('../AJAX/siteajax')
// const postAjax = require('../AJAX/postajax')

const ui = require('./ui')

const loadSite = function (siteId) {
  siteAjax.getOneSite(siteId)
    .then(ui.loadSiteSuccess)
    .then(ui.showPublicPosts)
    .catch(ui.loadSiteFailure) // need error handling
}

const readMore = function (event) {
  let newContent = ''
  const postId = event.target.dataset.id
  const siteId = store.site.id
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
const addHandlers = function () {
  $(document).on('click', '.read-more', readMore)
  $(document).on('click', '.read-less', readLess)
}
module.exports = {
  loadSite,
  addHandlers
}
