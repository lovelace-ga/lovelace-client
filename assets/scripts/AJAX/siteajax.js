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
    data: {
      site: data
    }// data will come from get form fields,
    // it will need to be in the same format we use in our curl request. the only value is 'name'
  })
}
const updateSite = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sites/' + store.site.id,
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
