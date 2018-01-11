
Feature('title');

*Scenario('Can user see page title', (I) => {
  let title =  yield I.grabTitle()
  I.amOnPage('http://localhost:8080/')
  I.seeInTitle()
});


// let title = yield I.grabTitle()
