# NTXFIT

Website for North Texas Families In Transition professional workgroup. Built with [ReactJS](https://16.reactjs.org/).

## Getting started

1. Install [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
2. Using NVM, install node version 16 with `nvm install 16`
3. Run `nvm use 16`
4. Clone this repository using git, or download it to your computer
5. Open your terminal and navigate to the cloned/downloaded directory. You should be in the root folder where the `package.json` exists.
6. Run `npm run install`

## Running locally

1. Run `npm run start`
2. Navigate to [http://localhost:3000](http://localhost:3000)

## Notable directories

- `/src/App.jsx` is the entry point of the react app.
- `/src/images/headshots` holds all headshots of the members
- `/src/lib/memberList.js` holds all active members and their information

## Deploy

1. Log in to the server with [FileZilla](https://filezilla-project.org/), or whatever FTP solution you're using.
2. Ensure you are on node version 16 with `node --version`
3. Run `npm run build` to create a new build folder
4. Copy contents of `build` folder into `public_data`
5. Always overwrite when prompted

> Note: To see updates, clear cache and refresh the page (CMD+SHIFT+R)
