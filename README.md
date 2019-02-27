# Schedule Generator
An implementation project for CPSC 430: Software Engineering. The client is Jeanne Campbell, CPSC department secretary.

## Tech Stack
* Python _Kivy_ for GUI
* Python _BeautifulSoup_ for webscraping logic
* Python _Selenium_ module for webform navigation logic
* Jeanne will need to host her files on Domain of  One's Own

## Installing Dependencies for Development
These instructions assume you have Python3 installed and squared away.

### Selenium
The Selenium project page is [here](https://www.seleniumhq.org/projects/webdriver/) for context.

1. Install Selenium Python module: `pip install selenium`
2. Install the latest WebDriver for Chrome through PyCharm
3. File -> Settings -> Project Interpreter -> Install -> Search and select "chromedriver-install"
4. Make and run a quick Python script to install:

`import chromedriver_install as cdi
path = cdi.install(file_directory='./lib/', verbose=True, chmod=True, overwrite=False, version=None, filename=None)
print('Installed chromedriver to path: %s' % path)`

5. It is probably installed under a filepath like `C:\Users\your_name\PycharmProjects\Schedule-Generator\lib\chromedriver.exe` now, but it needs to be added to your system's PATH environment variable or moved to a location that is already in your path.
6. You may have to restart before using webdriver in a script.
