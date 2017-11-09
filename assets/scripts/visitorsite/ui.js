'use strict'
const publicPostsTemplate = require('../templates/publicblog.handlebars')
const publicPagesTemplate = require('../templates/pagenav.handlebars')
const views = require('../JQviews')
const store = require('../store')

const loadSiteSuccess = function (siteData) {
  $('.navbar-brand').text(siteData.site.name)
  store.site = siteData.site
  return siteData.site
}
const showPublicPages = function (data) {
  // console.log('data is', data)
  const showPageList = publicPagesTemplate({ pages: data.pages })
  $('#public-nav-list').html(showPageList)
  views.publicView()
  $('.read-less').hide()
  return data
}
const showPublicPosts = function (data) {
  const blogArray = data.blog
  blogArray.forEach((item) => {
    item['content'] = item['content'].substring(0, 150) // trims the content before sending to handlebars
  })
  const showPostList = publicPostsTemplate({ posts: data.blog })
  $('#public-posts').html(showPostList)
  views.publicView()
  $('.read-less').hide()
}
const loadSiteFailure = function () {
  $('#error-success-msg').text('sorry there was an error loading posts for this site.')
}
const showPageContent = function (pageData) {
  $('#public-posts').hide()
  $('#site-page-header').text(pageData.title)
  $('#site-page-content').html("<p style='white-space: pre-wrap'>" + pageData.content + '</p>')
}
module.exports = {
  loadSiteSuccess,
  showPublicPosts,
  loadSiteFailure,
  showPublicPages,
  showPageContent
}
