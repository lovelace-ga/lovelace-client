'use strict'
const views = require('../JQviews')
const siteAjax = require('../AJAX/siteajax')
const postAjax = require('../AJAX/postajax')
const publicPostsTemplate = require('../templates/publicblog.handlebars')

const loadSite = function (siteId) {
  siteAjax.getOneSite(siteId)
    .then((siteData) => {
      console.log('siteData is', siteData)
      $('.navbar-brand').text(siteData.site.name)
      return siteData.site
    })
    .then((data) => {
      const showPostList = publicPostsTemplate({ posts: data.blog })
      $('#public-posts').html(showPostList)
      views.publicView()
    })
    // .then(postAjax.index)
    // .then((posts) => {
    //   // run post handlebars
    //   // run site handlebars
    //   views.publicView()
    // })
    .catch(() => console.log('site data not returned'))
}

module.exports = {
  loadSite
}
