# Scroll_Top
### A simple scroll top function

After adding this library to your project, make sure to build and initialize your element by 
typing for example:
```
const button = buildElement("button", "scroll-button", "Scroll Up", 100, 15);
```
It build on your document body tag an element choosed by you, for example a button with initialization
class, placeholder, activation height and of course the animation speed.


Used types can be found below, make sure to obey them! 
``` 
buildElement(
HTML tag: *string*,
added class: *string*, 
text: *string*, 
height: *number*
speed: *number*
``` 