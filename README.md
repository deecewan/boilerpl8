# boilerpl8

Up and running with express, react and mocha/chai.

TODO:

- [ ] add a test framework
- [ ] make a better example

PRs always wanted/welcome.

## Getting Started

First, create a file in the root of the directory called `.env`.  In here, you should have the 
following structure, at a minimum.  Put any other environment variables you like in there, too.

```sh
DB_PRODUCTION=
DB_TESTING=postgres://test:test@127.0.0.1/project_test
DB_DEVELOPMENT=postgres://user:passsword@127.0.0.1/project
```

Of course, change those DB urls to whatever they need to be on your machine.

Next, run [`yarn`](https://yarnpkg.com/en/docs/install) to install dependencies.


## Usage

Once your DB is running, and you've run `yarn`, run `npm run serve:dev` to start the server.

This will, by default, start on `http://0.0.0.0:3000`.  To change the port, add a `PORT=<port>` 
to your `.env` file.

A lot of the things are automatically included, if you put them into the right place.

All reducers in the `./client/reducers` folder are included onto the store by default.  Just add 
a new file with your reducer.

All routes in `./server/routes` are included by default, and are routed to `/api/<route_name>`.  
You can change this by playing around inside on `./server/routes/index.js`.  Note that all index 
serves in `index.html`.  All other routes should be inside seperate files.  See the `user` example.

`./static` is served at `/static`.  Put all static files in here, and reference them accordingly.
  Note that webpack will serve a `bundle.js` file from here, so don't put a file in there called 
  that.  When you build the project for production, that file will be placed in there.

#### Notes

This project, and most definitely this README is a work in progress.  I update it after almost 
every project I start from it, so I wouldn't go staking your life's work on it.  Almost every 
update is completely breaking.

It is a good place to start if you want to see how a project is set up.  It is also good if you 
want to see how you can incorporate hot-reloading into your existing project.