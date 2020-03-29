# mgAccordion
Yet another accordion jquery plugin

Okay, there are a tons like this one, probably better, but his one is my first jQuery plugin and I love it.

It allows to initialize how many accordions in the same page using the standard unordered list.

By default, it uses a normal boxed layout, but you can choose the built-in 'tree' layout.

It provides a basic css you can customize as you prefer.

## Install

Clone or download the repo and extract files in your javascript folder then link them to your html page:
```html
<link rel="stylesheet" type="text/css" href="mgaccordion.css"/>
<script type="text/javascript" src="mgaccordion.js"></script>
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
