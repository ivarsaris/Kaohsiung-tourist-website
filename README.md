# Kaohsiung Tourist Website

**Second milestone project; Interactive Frontend Development - Full Stack Software Developer course - Code Institute**

An interactive tourist information website for the city of Kaohsiung. Visitors can find information 
on what to do in Kaohsiung, how to get there, what kind of accommodation to stay, what foods to eat and where, 
and they can request a tailored holiday package being send to them. 

![image of homepage on different screens](https://github.com/ivarsaris/Kaohsiung-tourist-website/blob/master/media/responsive.png)

[Live website](https://ivarsaris.github.io/Kaohsiung-tourist-website/)

## UX

### Users

Users of the website are travel enthusiasts like myself. The kind of travelers that like to discover special places and 
hidden gems, instead of going with the masses. They visit the website to get introduced to a little known city which has a lot
to offer.

#### User stories

I started by creating [user stories](https://github.com/ivarsaris/Kaohsiung-tourist-website/blob/master/userstories) to help determine what features to add to the website.

### Design

In terms of design, I got inspiration from several (tourist)websites that I visited. I created a single page website because this 
makes it convenient for the visitor, to have all information together on one page. I used two text and background color combinations, white(#FFFFFF)
text on a blue/gray(#7a93b2) background, and dark gray(#343a40) text on a white background. The section alternate between the two combinations. The 
navbar and footer have light gray (#A0A0A0) text on a dark gray background. The font Helvetica has been used throughout the website. 

### Mockup

I created a mockup using [WIX](https://ivarsaris.wixsite.com/kaohsiung) 

## Features

Features implemented, and left to implement later. 

### Features implemented

* **Scroling navigation -** The visitor can navigate through the page with the navbar at the top. When clicking on the section, the page smooth scrolls to this section. It was choosen to not display the navbar on smaller screens because it takes up too much screen real estate.
* **Google maps API with markers -** Visitors can find a map with recommended activities.
* **Filter function -** Visitors can filter these activities and return all cultural or nature activities on the map.
* **Information dropdown and marker activation -** When clicking on an activity, an information section drops down. Also the marker on the map is activated so the visitor sees where the activity is located.
* **Form which sends e-mail -** The visitor can fill out and submit a form on the website. This will send an e-mail to the website creator. The content of the e-mail is a template completed with information from the answers on the form.
(https://github.com/ivarsaris/Kaohsiung-tourist-website/blob/master/media/form.png) (https://github.com/ivarsaris/Kaohsiung-tourist-website/blob/master/media/formmail.png)

### Features left to implement

* **Second map for finding hotels -** Visitors can see a map with hotels in Kaohsiung.
* **Interactive personal advice -** Visitor can answer some questions on what kind of activities they like, and they get recommendations on what to do.
* **Slideshow -** The background image of the welcome text becomes a slideshow.
* **Poll -** Adding a poll to the foods to eat section. Where visitors can answer which foods they would like to try. The poll keeps track of the answers.

## Technologies used 

The website has been made using the following technologies: 

* **HTML -** Coding language used for creating the content and structure of the website 

* **CSS –** Coding language used for styling the content 

* **Bootstrap (v4.3.1) –** https://getbootstrap.com/ Framework and Library for HTML and CSS 

* **Font awesome library -** https://fontawesome.com/ Used to display the icons used on the webpage 

* **JavaScript -** Used for creating functions which add interactivity to the website 

* **JQuery -** Used to simplify JavaScript for display purposes 

* **Google Chrome –** Used as browser and for developer tools  

* **Git –** Used for version control 

* **GitHub –** Used to host repository for the website 

* **Github Pages –** The website is hosted in GitHub pages 

## Testing 

The website achieved the goal set out. Visitors get introduced to the city of Kaohsiung. They can find activities to do, foods to eat and where, information on accommodation types, and fill out a form to get a custom-tailored holiday send to them. For the visitor it’s easy to access any part of the webpage with the smooth scrolling navigation bar.  

### Responsiveness 

The website has been tested on several devices in order to see if it’s responsive to any screen size. The website was tested on a dell laptop, a microsoft laptop, a MacBook, an iPad, an iPhone 7 and an Honor 10. On all devices the layout worked well. There was one bug on a mobile device. The dropdown navbar wasn’t convenient to use. Since the website is not very long, it was easier to scroll to the section. For this reason, I set the navbar on display: none on a small screen. This way the navbar doesn’t take up any screen space on a mobile.  

### Browser compatibility 

The website has been run in several browsers to make sure it’s compatible with the most common ones. The website runs well in Google Chrome, Mozilla Firefox, and Safari.  

### Code Validation 

The code has been run through several validators to make sure there are no errors.  

HTML -  

https://validator.w3.org/ 

https://html5.validator.nu/ 

CSS -  

https://codebeautify.org/cssvalidate 

https://jigsaw.w3.org/css-validator/ 

## Deployment 

The website is hosted on Github Pages(https://ivarsaris.github.io/Kaohsiung-tourist-website/) 

In order to host on GitHub pages, the following steps need to be taken; 

1. Open up a GitHub repository 

2. Create README.md and index.html 

3. Go to the GitHub pages section of the settings page of the repository 

4. Change source to master branch 

5. A link will appear, which is the homepage of your website 

Take the following steps to have your own version of the website; 

1. Install Git 

2. Open the repository, click “Clone or download” and copy the http code  

3. Open your IDE 

4. Open a terminal in your directory 

5. Type “git clone https://github.com/ivarsaris/Kaohsiung-tourist-website” 

When this process is complete, you can make changes to the website. Feel free to do so! Please show me your result if you use my project 😊  

## Credits 

### Content 

All content on the website was written by me. 

### Media 

Images were taken from Google. I don’t own the copyright to any of the images.  

### Acknowledgements 

I started the project with a [Bootstrap template](https://startbootstrap.com/templates/scrolling-nav/) for a single page website with a smooth scrolling navigation bar.  

Food images with text sliding up on hover. Concept taken from [this](https://www.youtube.com/watch?v=EXWjMswCuf8&t=249s) YouTube video, and adapted to this webpage. 