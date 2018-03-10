var assert = require('assert')
const globals = require('../globals.json')

Feature('title')

Scenario('Can user see page title', function * (I) {
  I.amOnPage(globals.pageUrl)
  let title = yield I.grabTitle()
  // I.seeInTitle("Video Player") wrong title
  assert.equal(title, 'React Redux')
})

Scenario('Can see the page header', (I) => {
  I.amOnPage(globals.pageUrl)
  I.see('Video Player')
})

Scenario('can see columns', (I) => {
  I.amOnPage(globals.pageUrl)
  I.seeElement('.label')
})
