# Lovelace Blog Platform

A blogging platform for users to create a blog site with posts and pages.
Authentication is required to update create or delete posts and pages, also to create and delete a site.
Visitors can view sites without logging in.

Users can
-create and edit posts and pages
-view their site and other sites
-delete posts and pages
-delete their entire site.

## Links

* [Lovelace github organization](https://github.com/lovelace-ga)

* [front end deployed site](https://lovelace-ga.github.io/lovelace-client/)
* [front end repo](https://github.com/lovelace-ga/lovelace-client)

* [back end deployed site](https://glacial-mountain-67409.herokuapp.com/)
* [back end repo](https://github.com/lovelace-ga/lovelace-express-api)

## Structure

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

## Technologies used
-javascript
-jquery
-bootstrap
-handlebars



## Unsolved Problems
- we'd like to implement some styling (aside from what we got for free from bootstrap)
  - maybe eventually implement color themes for the user to choose
- some unattractive style issues could be improved. (side bar too narrow for example)


2. ## planning/problem solving strategy

Prior to starting our project, we met to plan out wireframes, and user stories. We also set up a task list spreadsheet for us to keep track of who was working on each task throughout the project.

We were co-located for the majority of our project so solving problems was a matter of reaching out to each other for an extra set of eyes. Whenever we ran into issues we tried pair programming and trio programming to resolve them.

We also submitted issues to our instructors for help with some issues that we had trouble resolving. For example, we hadn't dealt with nested schemas in Mongo db before and asked for guidance on that.

## Wireframes

[landing page ](https://wireframe.cc/dTFsM7)
[dashboard](https://wireframe.cc/PDxeAB)
[site view](https://wireframe.cc/M976ao)

## User Stories

User Stories
As a User (authenticated), I want to...
  -sign in
	-change password
	-sign out
	-see a dashboard
	-See blog preview
	-create blog post
	-edit blog post
	-delete blog post
	-view a blog post
	-view all blog posts
	-create a page
	-edit page
	-delete page
	-view page
	-view all pages

As a Visitor (public), I want to...
	-see a landing page
	-view all sites
	-sign up
	-visit specific blog site
	-view all posts for specific site
	-view single posts for specific site
	-view all pages as tabs
	-view single page
	-See sign in button
