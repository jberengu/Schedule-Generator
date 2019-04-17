# Schedule Generator
An implementation project for CPSC 430: Software Engineering. The client is Jeanne Campbell, CPSC department secretary.

## Tech Stack
* [_Electron_](https://electronforge.io/) for project packaging, GUI support, and dependency management
* HTML, CSS, and JS for desktop GUI
* Various Node modules for webscraping and application logic
* Jeanne will need to host her files on Domain of  One's Own

## Installing Dependencies for Development
These instructions assume you have NodeJS installed and squared away.

### Electron
The project page is [here](https://electronforge.io/). It's an open source project that allows us to use HTML, CSS, and JS to build a desktop application.

You must have NodeJS installed to use Electron. Once you have NodeJS, install Electron like this:

`npm install -g electron-forge`

Once you `cd` into an electron project directory, you can install Node dependencies by running:

`npm install`

You can then run the application with:

`electron-forge start`

### Mariadb
This application uses MariaDB to function.
If on OSX, the install directions are:
`brew update`
`brew install mariadb`
To start maraidb:
`mysql.server start`

