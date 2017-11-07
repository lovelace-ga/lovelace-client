'use strict'
const store = require('../store')
const views = require('../JQviews')
const siteAjax = require('../AJAX/siteajax')
// const postAjax = require('../AJAX/postajax')
const publicPostsTemplate = require('../templates/publicblog.handlebars')

const loadSite = function (siteId) {
  siteAjax.getOneSite(siteId)
    .then((siteData) => {
      console.log('siteData is', siteData)
      $('.navbar-brand').text(siteData.site.name)
      store.site = siteData.site
      return siteData.site
    })
    .then((data) => {
      const blogArray = data.blog
      blogArray.forEach((item) => {
        item['content'] = item['content'].substring(0, 50) // trims the content before sending to handlebars
      })
      const showPostList = publicPostsTemplate({ posts: data.blog })
      $('#public-posts').html(showPostList)
      views.publicView()
      $('.read-less').hide()
    })

    .catch(() => console.log('site data not returned'))
}

const readMore = function (event) {
  let newContent = ''
  const postId = event.target.dataset.id
  const siteId = store.site.id
  console.log('siteid is ', siteId)
  siteAjax.getOneSite(siteId)
    .then((siteData) => {
      console.log('siteData readmore is', siteData)
      return siteData.site
    })
    .then((data) => {
      const blogArray = data.blog
      blogArray.forEach((post) => {
        if (post.id === postId) {
          newContent = post.content
        }
      })
      console.log('newContent is', newContent)
      return newContent
    })
    .then((newContent) => $(event.target).prev().text(newContent))
  $(event.target).prev().text(newContent)
}

const addHandlers = function () {
  $(document).on('click', '.read-more', readMore)
  // $(document).on('click', '.read-less', readLess)
}
module.exports = {
  loadSite,
  addHandlers
}
