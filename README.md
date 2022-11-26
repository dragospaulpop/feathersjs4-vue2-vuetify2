# feathersjs4-vue2-vuetify2 boilerplate with login

This monorepo includes the **users** service in the backend that uses **Mongoose** to interact with a **Mongo DB** local server.
The frontend app is configured with **vuex** and **vue router** and has the neccesary logic in place to handle **login** and **authorization** through a global **beforeEach hook** in the **router**.
The frontend is also configured to run the **feathers client** using **fetch** in order to simplify interacting with the backend **REST API**.
**Authentication** is **local** (email and password) and the **JWT (JSON Web Token)** is stored in **local storage** under the key **auth**.

## Mongo DB
Follow this guide to install Mongo DB Community Edition:
- on a Windows machine: [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (instructions about the data/db directory are on this page, just read it all)
- on a Mac: [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
- on Linux: [link](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

## NodeJS
Node is a runtime environment that enables us to run javascript outside of the browser.
Node comes with a toold named NPM (node package manager) that helps us easily manage dependencies in our projects. Yarn is an alternative to NPM that you'll be likely to encounter in the wild. There's others.
Fireship explains it way better than I ever could: [yt link](https://www.youtube.com/watch?v=ENrzD9HAZK4)
It's good practice to always use the latest LTS version of Node.
I suggest using NVM (node version manager) so you can have multiple versions of Node and easily switch between them.
That being said:
- Windows Node: [link](https://nodejs.org/en/download/)
- Windows NVM: [link](https://github.com/coreybutler/nvm-windows)
- Mac Node: [link](https://nodejs.org/en/download/)
- Mac NVM: [link](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- Linux Node & NVM: [link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)

## CLI tools
After having installed Node & NPM, you should install the feathers & vue cli tools:
- `npm install --global @feathersjs/cli` [docs](https://github.com/feathersjs-ecosystem/cli)
- `npm install --global @vue/cli` [docs](https://cli.vuejs.org/guide/installation.html)

## Install dependencies
After havinbg cloned the monorepo and having installed node, you should install dependencies in both the **backend** and **frontend** folders.
You need to open a terminal and navigate to the **backend** folder and issue `npm install`.
Navigate to the **frontend** folder and also issue `npm install`

## FeathersJS
Feathers is a backend framework built on top of the most famous NodeJS framework: Express.
What's special about it is that it provides a micro-service architecture and the ability to set up live data (through socket.io or primus).
If you don't like MongoDB you can use a ton of other database adapters, MySQL included, ofc (sequelize service) [more info](https://github.com/feathersjs-ecosystem/feathers-sequelize).
Learn about Express here: [docs](https://expressjs.com/) [yt playlist](https://www.youtube.com/playlist?list=PL-WQsHZpNUJbW4ZrZjIwMYkBJbQgFJ5HD)
Learn about Feathers here: [docs](https://docs.feathersjs.com/guides/) [yt playlist](https://www.youtube.com/playlist?list=PLwSdIiqnDlf_lb5y1liQK2OW5daXYgKOe)

## VueJS
Vue is one of the top 3 (or 4, if we include Svelte) fronend frameworks around today.
It's a very flexible reactive framework (as opposed the old imperative way of building apps).
Best documentation ever, for v2, here: [docs](https://v2.vuejs.org/)
I strongly encourage you guys to study Vue v3, but this project use Vuetify 2 and Vue CLI.
I think we'll be safe to make an update to Vuetify 3 and Vue 3 with Vite in about 6 months or so.

## Vuetify
Vuetify is a compoment framework/library for Vue.
It's built around the principles of Google's Material Design and it helps us keep our hands cleen of css while building apps that look very good.
An alternative to Vuetify is the Quasar Framework (built by a fellow Romanian).
Vuetify docs [here](https://vuetifyjs.com/en/getting-started/installation/)

## More resources:
- Getting comfortable with **the command line / terminal** is a must for any IT specialist: [link](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) [link](https://www.freecodecamp.org/news/command-line-for-beginners/) [link](https://www.learnenough.com/command-line-tutorial)
- Definitely know your way around with **GIT** if you don't already: [link](https://www.youtube.com/watch?v=hwP7WQkmECE) [link](https://www.youtube.com/watch?v=HkdAHXoRtos)
- Useful VSCode extensions, I ain't gonna link them all tho: Thunder Client, Trailing Spaces, Colorize, Vetur, Auto Rename Tag, Better Comments, Git Lens, Indent Rainbow, Live Server, Live Share, Rainbow Brackets, 

Remember: it's always a good idea to first read the official docs of stuff!

I might be updating this Readme and the repo if I think of new features or resources.
