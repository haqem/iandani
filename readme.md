### Note
This is the repo for the main library. For information to integrate components for different framework, please refer to the respective README.
Framework | README Location
------------ | -------------
VanillaJS | ./sgds-masthead
Angular | ./sgds-angular/projects/sgds-angular-component
React | ./sgds-masthead-react

### Publish all the libraries

Do this in a single commit

1. Update the package version in ./sgds-masthead/package.json.
2. In sgds-masthead directory, run ```npm build```. This will generate the components for react and angular.
3. [FOR ANGULAR] Update the package version and the dependency version of sgds-masthead in ./sgds-angular/projects/sgds-angular-component/package.json.
4. [FOR ANGULAR] In sgds-angular/projects/sgds-angular-component directory, run ```npm install``` to update the package-lock.json.
5. [FOR REACT] Update the package version and the dependency version of sgds-masthead in ./sgds-masthead-react/package.json
6. [FOR REACT] In sgds-masthead-react directory, run ```npm install``` to update the package-lock.json.
7. Git commit all changes and git actions will publish the library
