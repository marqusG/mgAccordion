# mgAccordion, yet another accordion jQuery plugin

Okay, there are a tons like this one, probably better, but his one is my first jQuery plugin and I love it.

It allows to initialize how many accordions in the same page using the standard unordered list.

By default, it uses a normal boxed layout, but you can choose the built-in 'tree' layout.

It provides a basic css you can customize as you prefer.

## Install

Clone or download the repo or install via npm running
```
npm install -i mgaccordion
```
Extract or copy the downloaded files in your website directory  then put into your html page a link to them. Tipically:
```html
<!-- <head> section -->
<link rel="stylesheet" type="text/css" href="css/mgaccordion.css"/>
<!-- end of <head> section -->

<!-- <footer> section -->
<script type="text/javascript" src="js/mgaccordion.js"></script>
<!-- end of <footer> section -->
```

Finally, just initialize it:
```html
			$(document).ready(function () {
				$('.my-list').mgaccordion();
			});
```

## Options
Currently you can set following options:

layout (string):     default to 'flat'
				             set it to 'tree' if you want to display the accordion with a tree structure
leaveOpen (boolean): default to false (mgAccordion close all other submenus when you open a new one)
										 set it to true if you want all opened submenus remain expanded when you open a new one

## Change log
*02/04/2020*
+ removed call to unbind (needed only using jQuery UI widget factory)
+ added code to check if the passed element is a list and exit silently if it is not
