# reddit-fact

<p align="center">
  <a href="https://github.com/FlashBlaze/reddit-fact/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@FlashBlaze/reddit-fact is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://app.netlify.com/sites/reddit-fact/deploys">
      <img src="https://api.netlify.com/api/v1/badges/adbfab56-08f1-43ee-b97d-25b17ea64c49/deploy-status" alt="Netlify Status" />
    </a>
</p>

A simple React app which displays a random fact from Reddit using their API.

:tada: Site is live [here](https://reddit-fact.netlify.com) :tada:

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
