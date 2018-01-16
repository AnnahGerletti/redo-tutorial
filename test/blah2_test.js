const globals = require('../globals.json')
Feature('Front Page')

Scenario('test something', (I) => {
  I.amOnPage(globals.pageUrl)
  // I.fillField('textBox', 'cat')
})

// Are you able to write several tests for one page?
// I don't know what the change is
