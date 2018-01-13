#### General Steps for Implementing Assignment Requirements
Suggestion: Read through all the requirements first and then come back to \#1 again. These are **not** necessarily listed in the order you should create them. Choose whatever order works for you. This list is simply an extended hint of how to implement a solution for this assignment.

1. Declare `ng-app` either on the `html` or the `body` element. Name your app `MenuApp`.
2. You must follow the 1 artifact per file rule. That means if the JS file declares a controller, it should *not* declare anything else like a service or component and vice versa. Use a separate JS file to declare other artifacts in your application. *Don't forget to include each JS file in your `index.html`!*
3. Create a file called `menuapp.module.js` and declare an Angular module to match your `ng-app` declaration.
4. Create `data.module.js` file and declare another module in it called `data`. Make sure the `MenuApp` module lists the `data` module as a dependency.
5. Create `menudata.service.js` file and create a service called `MenuDataService` in it. This service should be declared on the `data` module, *not* on the `MenuApp` module. The `MenuDataService` should have 2 methods:
  * `getAllCategories` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
  * `getItemsForCategory(categoryShortName)` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, your code should append whatever `categoryShortName` value was passed in as an argument into the `getItemsForCategory` method.
6. Create `categories.component.js` file and create component called `categories` that shows all available categories in the menu to the user.
7. Create `items.component.js` file and create a component called `items` that shows all of the menu items for a particular category.
8. The `categories` and the `items` components should *NOT* directly use the `MenuDataService` to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way `<` binding).
9. Create `routes.js` file and configure your routes and view states in it. These routes should be defined in the `MenuApp` module.
  * *Hint:* don't try to define the states all at once. Define one state, including whatever it needs and make sure it works all the way to the point when you can see the results on the screen. Then, move on to the next view state. That *does* mean that you will have to leave `routes.js` and define all the other artifacts listed below and then come back to it, etc.
  * *Hint:* The `home` state will not need a controller. Just a template.
  * *Hint:* The `categories` state can have a `controller` as well as a `resolve`. The resolve will use the `MenuDataService` to retrieve categories and inject them into the controller. The controller can then expose the retrieved categories object such that it can be simply passed into the `categories` component.
  * *Hint:* The `items` state can have the same type of setup as the `categories` state.


#### Important Implementation Notes
1. Make sure all of your Javascript code is inside of an IIFE. (*If you don't know what that is or why we'd want to use it, brush up on it by looking through module 4 of [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers/) course I teach.*)
2. Make sure all of your dependency injections are protected from minification.
3. After you are done and satisfied with your solution, don't forget to add/commit/push your code to your repository.
