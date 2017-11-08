'use strict'
const config = require('../config')
const store = require('../store')

const getAllSites = function () {
  return $.ajax({
    url: config.apiOrigin + '/sites',
    method: 'GET'
  })
}
const getOneSite = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/sites/' + id,
    method: 'GET'
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
    url: config.apiOrigin + '/sites/' + store.site._id, // If broken try store.site._id
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data // data will come from get form fields,
    // it will need to be in the same format we use in our curl request
  })
}

const destroySite = function () {
  return $.ajax({
    url: config.apiOrigin + '/sites/' + store.site._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getAllSites,
  getOneSite,
  updateSite,
  createSite,
  destroySite
}
