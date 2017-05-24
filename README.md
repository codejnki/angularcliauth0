# angularcliauth0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

This repo is to demonstrate an error with Auth0 built with the Angular CLI.

After adding the auth0-lock package and doing the production build, the development version of React is minified causing this browser error.

![browser error](react-error.png)

I created a new empty angular app with the CLI.  I then added the auth0-lock package.

`npm install auth0-lock --save`

I imported the auth0-lock in to my app component and configured it with some dummy data (that isn't a real client Id).

Next I built the project using

`ng build -prod -env=prod`

This minifies and builds the project in to the `/dist` folder.

If you serve up the files in the dist folder you'll get the above error.
