# Pettamo

A web app for online vet consultations & verified pet care services to better care for your pets :dog::cat:

<img src="https://github.com/Nitheeshskumar/pettamo-mvp/blob/readme/readme/image.png" alt="image" />

## Overview

This project is submitted for Build Modern Data App Hackathon. Link to live demo is [**Live Demo**](https://pettamo.netlify.app/)

Our humble and super bare minimum MVP is using the Netlify's functions (serverless) feature to talk to the API layer of the AstraDB - to save us lots of time doing laborious backend plumbing work. For the API layer, we've chosen the Stargate document API to interact with AstraDB's Cassandra database since the devs are mostly coming from MongoDB realm. Furthermore, we've only used a single collection to bring up the MVP fast - a tradeoff that we agreed to enable us to present the video demo of our working product on time.

## Getting Started Locally

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
| **functions**/                     | user account management                                      |
| **functions**/**utils**            | config astra client                                          |
| **public**/                        | Static files                                                 |
| **src**/                           | place for main working code                                  |
| **src**/index.js                   | entry clientside                                             |
| **src**/**Assets**                 | static assets                                                |
| **src**/**Components**             | components used in the app                                   |
| **src**/**ContextStore**           | Global Data                                                  |
| **src**/**Modules**                | sub-components used in components                            |
| **src**/**Routes**                 | JS handling routes and guarding unauthorized req             |
| **src**/**Services**               | axios config and handling                                    |
| **src**/**Utils**                  | some utility functions                                       |

### What and how does project leverage Astra DB

### Quick steps about where to look for how you have used Astra DB for judges

### Credits

* The contents of this repo are based on [Jake's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt)
* The project is modified from [huksley/todo-react-ssr-serverless](https://github.com/huksley/todo-react-ssr-serverless)
