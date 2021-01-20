# PLGD Dashboard

## Requirements

    nodejs

## Configuration
Configuration for the client can be found in `./src/auth_config.json`.

## Installation

    $ npm install

## Starting the development server

    $ npm start

Application will be hosted on `http://localhost:3000` by default. To change the default port, put `PORT=xxxx` into `package.json` script for starting the development server

    cross-env PORT=3000 craco start

or set `PORT` into your environment variables.

## Building the app

    $ npm run build

## Translation
For extracting the messages from the UI components, run the following script:

    $ npm run generate-pot

This script will generate a `template.pot` file, which contains all the strings from the application ready to be translated. Upload this file to your translation tool, translate the strings and after that, export the `.po` files for all the translations and place them into `./i18n` folder.

For generating language files which are used by the application, run the following script:

    $ npm run generate-language-files

Now your translations are updated and ready to be used.