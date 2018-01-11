
Feature('title');

Scenario('Can user see page title', (I) => {
  I.seeInTitle('Video Player')
});
