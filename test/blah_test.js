
Feature('Search for Video');

Scenario('User search for new video', (I) => {
  const searchTerm = 'cats'

  I.amOnPage('https://localhost8080')
  I.seeInTitle('Video Player')
  I.fillField('.video-input', serchTerm)
  I.see(videos, '.videoList')
});
