# Project: GuileCat

### Purpose
In this age of cybersecurity threats, a strong password is tremendously important. We designed GuileCat to generate random yet memorable passwords that also meet incredibly high standards for security. Part of the inspiration for this project, as well as our definition of secure comes from this article: https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/.

## Getting Started
This webpage uses modules for the transfer of functions and variables across multiple javascript files, and as such requires a local server for non-deployed use.

To initialize a local server, first download and install Node.js and execute the following command in the command line for the directory that you downloaded the code:

```
npm install -g http-server
```
The next step is to initialize the server with the following command:

```
http-server . -p 8000 -c-1
```
You can now access the page by navigating to

```
localhost:8000
```
in your browser.

Additionally, the page uses multiple external libraries so an internet connection is required to display the site correctly.

## Built With
* [BootStrap](http://getbootstrap.com/) - CSS styling and Framework
* [jQuery](https://jquery.com/) - JavaScript library
* [jQueryUI](http://jqueryui.com/) - Framework and interactive elements
* [jQueryUI Touch](http://touchpunch.furf.com/) - Touch support for jQueryUI elements
* [DrumJS](https://github.com/3epnm/drumjs) - JavaScript behind the drums
* [Google Font](https://fonts.google.com/specimen/Anonymous+Pro) - Font
