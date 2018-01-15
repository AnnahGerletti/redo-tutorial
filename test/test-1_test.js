var assert = require('assert')
const globals = require('../global.js')

Feature('title')

Scenario('Can user see page title', function * (I) {
  I.amOnPage(globals.pageUrl)
  // let title =  yield I.grabTitle('.title')
  let title = yield I.grabTitle()
  // I.seeInTitle("Video Player")
  assert.equal(title, 'React Redux')
})

Scenario('Can see the page header', (I) => {
  I.amOnPage(globals.pageUrl)
  I.see('Video Player')
})
