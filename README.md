# Pettamo

**Live Demo**: <https://pettamo.netlify.app/>
</n>
**Video Pitch**: <https://www.youtube.com/watch?v=fvX_XDb5HnU>

## Overview

Our humble and super bare minimum MVP is using the Netlify's functions (serverless) feature to talk to the API layer of the AstraDB - to save us lots of time doing laborious backend plumbing work. For the API layer, we've chosen the Stargate document API to interact with AstraDB's Cassandra database since the devs are mostly coming from MongoDB realm. Furthermore, we've only used a single collection to bring up the MVP fast - a tradeoff that we agreed to enable us to present the video demo of our working product on time.

## Getting Started

```shell
# Get the latest snapshot
git clone https://github.com/Nitheeshskumar/pettamo-mvp.git

# Change directory
cd pettamo

# Install NPM dependencies
npm install

# Then simply start your app
npm run dev
```

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .dockerignore                      | Folder and files ignored by docker usage.                    |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continuous integration.              |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

### What and how does project leverage Astra DB

### Quick steps about where to look for how you have used Astra DB for judges

### Things to Note (reference repos or credits of open-source)

* The contents of this repo are based on [Jake's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt)
* The project is modified from [huksley/todo-react-ssr-serverless](https://github.com/huksley/todo-react-ssr-serverless)
