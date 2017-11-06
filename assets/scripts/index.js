'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const dashEvents = require('./dashboad/events')
const authEvents = require('./auth/authevents')
const landingEvents = require('./landingpage/events')
const visitorEvents = require('./visitorsite/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  dashEvents.addHandlers()
  authEvents.addHandlers()
  landingEvents.addHandlers()
  visitorEvents.addHandlers()
})
