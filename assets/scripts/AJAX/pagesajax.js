'use strict'
const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields we will need 'title' and 'content'
  })
}
const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + data.post.id, // this says post, and that's CORRECT -  because we're sharing the html with the post edit form. The name format of these fields is name="post[content]",  so this has to match.
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields we will need 'title' and 'content'
  })
}
const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
