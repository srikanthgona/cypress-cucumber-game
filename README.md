## Introduction
This project is a PoC for Cypress using Cucumber.

## Setting up
```
clone git repo: https://github.com/srikanthgona/cypress-cucumber-game.git
npm install
```  

## To run tests in Electron (headless)
```
npm test
```

## To run tests in chrome browser
```
npm run cypress:chrome
```

## To run tests from cypress window
```
npm run cypress:open

run any feature file from cypress window
```

## To view the mochawesome reports
```
open project path : cypress-cucumber-game⁩ -> ⁨mochawesome-report⁩ -> mochawesome.html
```

## Pending tasks:
```
1. Mochawesome reports needs some tweak to show the complete test results
2. In reponsive mode need to implement step -> Then I should be on "XBOX ONE X" mobile page
   As on clicking the link 'Xbox One X child menu' the mobile view is dissapearing
3. Refactoring of the feature files and step files can be done, to make them more generic by passing the arguments
```