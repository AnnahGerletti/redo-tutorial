
Feature('title');

Scenario('Can user see page title', function * (I) {
  I.amOnPage('http://localhost:8080/')
  let title =  yield I.grabTitle('.tilte')
  I.seeInTitle("Video Player")
});



// let title = yield I.grabTitle()


// Scenario('see lat value', function * (I) {
//   I.click('MORE INFO')
//   I.wait(0.3)
//   I.waitForVisible('.pic')
//   let lat = yield I.grabTextFrom('#lat')
//   let latNo = lat.split(' ')[1]
//   I.see('Lat: ' + latNo)
// })
