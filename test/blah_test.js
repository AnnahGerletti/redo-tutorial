const globals = require('../globals.json')
Feature('Search for Video')

Scenario('User search for new video', (I) => {
  const searchTerm = 'cats'

  I.amOnPage(globals.pageUrl)
  I.seeInTitle('Video Player')
  I.fillField('.video-input', searchTerm)
  I.see('.videoList')//see list of searched videos on side of page
});
