'use strict'
const config = require('../config')
const store = require('../store')

const getAllSites = function () {
  return $.ajax({
    url: config.apiOrigin + '/sites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getOneSite = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/sites/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createSite = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields,
    // it will need to be in the same format we use in our curl request. the only value is 'name'
  })
}
const updateSite = function (data) {
  // not sure if we're getting ID this way this time, we might need to change this.
  const id = parseInt(data['site']['id'])
  return $.ajax({
    url: config.apiOrigin + '/sites/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields,
    // it will need to be in the same format we use in our curl request
  })
}
module.exports = {
  getAllSites,
  getOneSite,
  updateSite,
  createSite
}
