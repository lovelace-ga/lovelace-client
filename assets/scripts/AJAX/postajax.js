'use strict'
const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/create-post',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/update-post',
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
