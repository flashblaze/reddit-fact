# reddit-fact

A simple React app which displays a random fact from Reddit using their API.

## How to use

1. Create and register your **script** app [here](https://www.reddit.com/prefs/apps)
2. Clone the repo and go into it. Run `npm install` to install the dependencies.
3. Create a `config` folder in `src` directory and create a `data.js` file in it.

   The directory structure is something like this:

   ```
   project
   |
   |
   |-src
    |
    |
    |-config
        |data.js
   ```

4. Create a requester like so and export it:

   ```js
   const snoowrap = require('snoowrap');

   const r = new snoowrap({
     userAgent: 'put your user-agent string here',
     clientId: 'put your client id here',
     clientSecret: 'put your client secret here',
     username: 'put your username here',
     password: 'put your password here'
   });

   export default r;
   ```

   For more info, you can refer [this](https://github.com/not-an-aardvark/snoowrap#examples)

## Technologies used:

- [react](https://github.com/facebook/react)
- [snoowrap](https://github.com/not-an-aardvark/snoowrap)
- [tailwindcss](https://github.com/tailwindcss/tailwindcss)
