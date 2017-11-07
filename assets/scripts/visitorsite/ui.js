'use strict'
const publicPostsTemplate = require('../templates/publicblog.handlebars')
const views = require('../JQviews')
const store = require('../store')

const loadSiteSuccess = function (siteData) {
  $('.navbar-brand').text(siteData.site.name)
  store.site = siteData.site
  return siteData.site
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
module.exports = {
  loadSiteSuccess,
  showPublicPosts,
  loadSiteFailure
}
