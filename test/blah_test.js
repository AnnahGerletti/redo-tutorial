const globals = require('../globals.json')
Feature('Search for Video')

Scenario('User search for new video', (I) => {
  const searchTerm = 'cats'

  I.amOnPage(globals.pageUrl)

  I.fillField('.input', searchTerm)
  // I.see('cats')//see list of searched videos on side of page
})
