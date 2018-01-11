
Feature('Search for Video');

Scenario('User search for new video', (I) => {
  const searchTerm = 'cats'

  I.amOnPage('https://localhost:8080')
  I.seeInTitle('Video Player')
  I.fillField('.video-input', serchTerm)
  I.see(videos, '.videoList')//see list of searched videos on side of page
});
