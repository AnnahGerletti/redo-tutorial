# ReduxSimpleStarter Tuturial from Udemy
#### Tutorial by StephenGrider

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/AnnahGerletti/redo-tutorial.git
> cd redo-tutorial
> npm install
> npm start - there is a server and want to use localhost:8080
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
# codecept Testing framework added to tutorial
#### Documentation is good - can be confussing  

https://codecept.io/

# Key things to rememeber

1. KEY: Don't get *codecept.io* mixed up with *codeception* DIFFERENT. 
- codeceptjs = codecept.io

2. Helpful github repo
- https://github.com/Codeception/CodeceptJS

3. To Run your tests 
- run codecept --steps
** the comd can be changed in your scripts part of the package.jason**

4. Quick Start is a good reference starting point
- https://codecept.io/quickstart/
 
 #### Example Test code
 ```sh
 Scenario('Can user see page title', function * (I) {
  I.amOnPage(globals.pageUrl)
  let title = yield I.grabTitle()
  // I.seeInTitle("Video Player") wrong title
  assert.equal(title, 'React Redux')
})
```
- The 'I' key word is part of the Acceptance testing framewrok, every test starts with it. 
- Must consider all Edge cases. 
- `I.amOnPage` is one of the Codecept.io helpers
- `yield` is an ES6 genorator function, can read about these here: 
https://davidwalsh.name/es6-generators
