## Project 2: High-Fidelity (Hi-Fi)

This is a project to work on Model View Controllers and GitHub collaboration. We created an app to track record ownership.

### Project Links
[Here is the project repository.](https://github.com/nealpoppe/hi-fi)

[Here is the published project.]()

#### Entity Relationship Diagram
![ERD](./images/ERD.png)

### Current Features
* User Profile page
  * Welcoming the user
  * Shows name, username, and password
  * Add a record to the users collection
  * Edit user button
  * Delete user button
  * Shows the users collection
* Record index page
  * Create a new record
  * List record by title and artist
  * Edit record link
  * Delete record button

### Planned Features
* Button to remove owned record
* Add record genre table
* CSS styling
* Encrypt passwords
* Ability to add multiple records at a time


### Technology Used
* Utilizing MVC architecture
  * Routes
  * Controllers
  * Views
* SQL database
* JOIN tables
* Sequlize
* Express/EJS
* Heroku

### Example Code
.gitignore file (see errors below)
```
node_modules
config/
```

### Issues and Resolutions
Due to different hardware setups, we all required different config file. We were abel to add ```//config/``` to the gitignore file to avoid issues.

With three people working on this project we had to figure out how to all work in the same files without creating errors. We decided to all work in the main branch, but on different sections. We let the first person push their code, then the others had to pull to update their files.

### Additional Comments
We all crated the initial migration and seed files together, with one person coding. Then we all had to do the installs to make sure our SQL DB's matched.

We discussed a style guide to keep our code consistent, lilke using req.params.id vs req.params.index, and all using double quotes instead of single quotes.
