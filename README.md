## Project 2: High-Fidelity (Hi-Fi)

This is a project to work on Model View Controllers and GitHub collaboration. We created an app to track record ownership.

### Project Links
[Here is the project repository.](https://github.com/nealpoppe/hi-fi)

[Here is the published project.](https://hi-fi-crue.herokuapp.com/)

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

### Issues and Resolutions (How We Spent Six Hours Deploying)
Due to different hardware setups, we all required different config file. We were abel to add ```//config/``` to the gitignore file to avoid issues.

With three people working on this project we had to figure out how to all work in the same files without creating errors. We decided to all work in the main branch, but on different sections. We let the first person push their code, then the others had to pull to update their files.

Multiple issues setting up Heroku. We had to undo our gitignore fix in order to publish correctly. Recieved error code H10 status 503. Double checked our config.json scripts.
We did not have the following code in our server.js.
```
app.get('/',(req,res) => {
   res.render('users/index.ejs');
})
```
We did not have a .env file and had to modify the app.listen that was hardcoded to port 3000. We also used the following code to get to our front page
```
heroku config:unset --hi-fi-crew
heroku config:set production =use_env_variable
```
We also needed to add the following code in order to set up our database
```
"dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
    }
```

### Additional Comments
We all crated the initial migration and seed files together, with one person coding. Then we all had to do the installs to make sure our SQL DB's matched.

We discussed a style guide to keep our code consistent, lilke using req.params.id vs req.params.index, and all using double quotes instead of single quotes.

### User Stories
##### Story 1
As a record owner, I want an app to keep track of my collection. I want to sign up and see my collection, and add new records
##### Story 2
I want to be able to see the records that other users own, and add them to my collection.
##### Story 3
As a DJ I want a way to organize my records and also see what records other people have/like.
##### Story 4
My wife and I have large record collections and we want to keep track of whose is whose.
##### Story 5
As a music teacher, I want to assign different music genre to students so they can get accustomed to different sounds than they have experienced in the past.
##### Story 6
I own a record store and I like to see what records are popular so I know what to stock.
##### Story 7
I have a group of friends that all own and collect records, I'd like to make sure we don't duplicate our collection too much!
##### Story 8
I like to be unique, so I would like to find obscure records that not too many people own to add to my collection.
##### Story 9
I want to find other people with the same tastes and connect with them.
##### Story 10
I want an easy way to look at just vinyl records, not stuff released on cd or cassette or digitally.