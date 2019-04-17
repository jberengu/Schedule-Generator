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

On Windows, the installation guide can be found here:https://mariadb.com/kb/en/library/installing-mariadb-msi-packages-on-windows/

## How to use this application

### First Time User
First time users should always select the "Generate New" button. This will create and populate a database with course information and professor data.

Once it is done scraping banner for the course information, you will be forwarded to the main department schedule page. From here you will notice that the professor data is "null" 

### Editing Persistent Professor Information
Click the button next to the instructors to go to the edit page. 
  From here you can:
  1. Delete professors who are not in the CS Department. This will remove them from the database permanently and the department schedule    will be updated
  2. Edit the other required data such as the email, phone number, and office number
  
Make sure to hit save before exiting the page.
You may click return and your edits should be visible on the main department schedule

***Office Hours are not persistent and will need to be edited each time!***

***Office Hours are not saved!***

### Downloading the Department Schedule
1. Click the download button. 
2. This will prompt you for a name and location to save the resulting png image. 
3. From here the png could be printed or shared on Domain of One's Own

### Download Individual Professor Schedules
1. Click on "Professor Schedule"
2. Use the dropdown menu to select the appropriate professor
3. Click Download
4. Steps similar to that above

### Previous User
Click the previous schedule button to pull up what was last saved in the database

## Hosting Schedules using Domain of One's Own
1. Go to  [umw.domains](https://umw.domains/)
2. Login using NetID and Password
3. In the cPanel interface, scroll down to the **Files** section and select **File Manager**
4. In the main file area, scroll down to `public_html` and double click it
5. In the topbar, select **Upload** and drag your schedule PNG in the upload area
6. Once uploaded, you can access the file via your site URL:

For example, if my domain is http://mydomain.com and the file I uploaded is named `spring_2019_dept_sched.png` I can access the file online by going to http://mydomain.com/spring_2019_dept_sched.png and can share this link with others.
