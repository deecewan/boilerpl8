# Express w. React
## Hot Reloading, on the client and server

### The Idea
I was looking for a decent workflow to use while I got familiar with react.  I found something
similar, but it was written in ES5, and additionally, I wanted to know exactly how everything fitted
together.

### What?
This is written all in ES6, at least.  The config uses Stage 0 proposals, and above, as well as ES7
approved concepts.  `babel-node` is used to run everything so `import/export` syntax will be fine.

While the server is running, in development mode, the client-side webpack config is continuously
refreshed.  There is also initial support for server-side reloading, but this will likely only work
for changes made inside `/server`.

### Shh.  I want to use it.

- As always, `npm i`
- To run dev, `npm run serve:dev`
    - this will serve on [localhost](http://localhost:3000).
- When you're happy with it,
    - to build both server and client, `npm run build`
    - to build the server only, `npm run build:server`
    - to build the client only, `npm run build:client`
    - the builds are available in `/dist` (see below)
- Testing is not yet implemented
    - look forward to mocha and chai expect
    - clientside tests are up to you

### Project Structure

```
    | ./
    |-- /server
        |-- /models         <-- models go in here
        |-- /routes         <-- all your routes go in here
        |-- index.js        <-- loads the base route to send index.html
    |-- /client
        |-- /components     <-- components go here
            | Root.jsx      <-- the base component
        |-- index.html      <-- this probably doesn't need editing, other than metadata
        |-- index.jsx       <-- loads Root.jsx and mounts it to #app
        |-- actions.js      <-|
        |-- reducer.js      <-|-- this is subject to change. I'm not really familiar with best practice
        |-- store.js        <-|
    |-- /tools              <-- tools used to build the project. Default use won't need to edit this
    |-- /dist               <-- the compiled javascript will go here
    
```

### Caveats

This project is highly opinionated, because it's mostly designed for me to get projects off the
ground quickly.  In this sense, there are probably things about it you hate.  That's cool, I highly
encourage you to rip it apart, and make pull requests.

I am still trying to figure out React with Redux and how it should best go together.

### Further Thoughts

Please, please, please make PR's with things you want to see changed.  I'm open to anything.