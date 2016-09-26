# boilerpl8

Up and running with express, react and mocha/chai.

TODO:

- [ ] add a style framework
- [ ] add a test framework
- [ ] make a better example

PRs always wanted/welcome.

## Usage

Everything is layed out in a pretty logical order.  All your server-side code goes into `./server` and client-side goes 
into `./client`.

To start, run `npm install` and then `npm run serve:dev`.  If you want webpack-dashboard, run `npm run serve:dash`.

From there, everything inside of `./server/routes` will hot reload.  Also, everything in `./client` _should_ live 
reload.  There are limitations, but your console will tell you when you need a hard reload.

### Tests

Testing is setup.  There are folders under `./test`, but you aren't required to use them.  Any `*_test.js` files inside
of `./test` will get hit.

This also includes coverage, which will print out once your tests are complete.

## Deployment

I haven't really found the best way of doing this, but the way I currently do it is:

- `npm run build`

This will produce a `bundle.js` file inside of `./dist`.  It will produce a `./out` folder with serverside code.  This 
 can be run `npm start`, and this will run your project in 'production' mode, with node rather than babel-node.
 