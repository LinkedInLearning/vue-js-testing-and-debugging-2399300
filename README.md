# Vue.js: Testing and Debugging
This is the repository for the LinkedIn Learning course Vue.js: Testing and Debugging. The full course is available from [LinkedIn Learning][lil-course-url].

![Vue.js: Testing and Debugging][lil-thumbnail-url] 

You've learned Vue and can create amazing front-end interfaces, but how do you make sure they really work?  With Jest, ESLint, and browser dev tools, you can look under the hood and see how well your interface is really working. Instructor Fikayo Adepoju explains the benefits of well-tested code, then delves into how to set up your testing tools. Fikayo goes over everything you need to start unit testing, including testing strings using matchers, organizing tests, testing asynchronous code, and more. He shows you how to test Vue.js components and how to use Chrome DevTools and Vue.js Devtools to debug your application. Plus, Fikayo steps through functional and automated testing in Cypress and CircleCI.

# explore-california-profile

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

### Instructor

Fikayo Adepoju               

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/fikayo-adepoju).

[lil-course-url]: https://www.linkedin.com/learning/vue-js-testing-and-debugging
[lil-thumbnail-url]: https://cdn.lynda.com/course/2399300/2399300-1630434558347-16x9.jpg
