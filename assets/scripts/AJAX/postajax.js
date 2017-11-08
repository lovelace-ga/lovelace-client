'use strict'
const config = require('../config')
const store = require('../store')

// const index = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/posts',
//     method: 'GET'
//   })
// }
// const show = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/posts/' + id,
//     method: 'GET'
//   })
// }
const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields we will need 'title' and 'content'
  })
}
const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields we will need 'title' and 'content'
  })
}
const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/deletepost',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'site': {
        'postID': id
      }
    }
  })
}
module.exports = {
  create,
  update,
  destroy
}
