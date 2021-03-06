Module 4 Coding Assignment
=======
## Assignment Instructions

### General Idea
Super simple idea behind this week's assignment: use the restaurant menu REST API to create a master/detail view pair.

Your application should have 3 views (i.e., 3 view states): home (`home`), categories list (`categories`), items list (`items`).

As long as the views are functional and readable, the styling does not really matter and is not graded.

When the user goes to `/` path in your application, a home screen should be shown. It's up to you what you place on the home screen. You can just say "Welcome to our Restaurant". The home screen should have a link to a list of categories of menu items in the restaurant. Clicking that link would obviously take the user to the `/categories` view.

The categories view should list all available categories of items on the menu. Each listing should be a link. Clicking that link should take the user to the `/items` view. Note that since what the `items` view state shows is dependent on which category the user clicked, the URL mapping will need to have a parameter in it. I.e., don't take the URLs I am listing in the assignment description as literal URLs. They are just naming hints.

Make sure that if, while viewing the list of menu items for a particular category, the user copies the URL in the browser's address bar and pastes it into a new tab or a different browser, that the view is the same as the original one.

### Implementation Instructions

[Implementation requirements](Implementation.md)

### Solution:

* Created basic starter solution skeleton with all files mentioned in [the implementation requirements](Implementation.md) and a home template.
* Implemented home page, started categories page
* Added category links to categories page, implemented items page
* Code cleanup, added backtrack links
* Added error watcher to display an error message when a state transition fails
* Refactored to separate categories state template and categories component
* Refactored to separate item state template and item component
* Add base URL constant for $http URL (as shown in lecture)
* put `return data.response` in `menudata.service.js`

### Status:

I'm going to call this done. The only potential guideline issue I see is that I put the definition 
of `ApiBaseUrl` in the `data.module.js` file instead of giving it its own file. But it seems
pretty silly to me to break this out into it's own file when `data.module.js` is already
there (and pretty much empty anyway).
