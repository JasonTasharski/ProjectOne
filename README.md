# THREE WARS: <small> Tracking India's Insurgencies </small>

People die in the wars you haven't heard of, too.

## Done:

* Index.html shows a hard-coded event with two reports, via templates
* Database exists and is running
* Schema for <i>events</i> and <i>reports</i>
* Kimono API (two articles, one source)
* All that works locally works on Keruho

## Doing:

* Show multiple hard-coded events
* Set up requests to connect client-side to mongoDB
* Set up requests to connect mongoDB to Kimono API (Manually create events to hold Kimono reports)
* Expand Kimono API to test more throughly

## To Do:

### Minimum:

* Make API update self daily, with a max of ~10 items (can always make it larger later)
* Produce an event for each report
* Check to see if an event for a report's date/location exists; add that report to that event if it does; make a new event for that report if it doesn't
* Process <i>reports</i> to get dates and locations from them; use those to create <i>events</i> with those dates and locations (and types? deaths, injuries?)
* Process <i>reports</i> to show the first paragraph of each (plus url/source/date/location), saving and hiding the full text
* Update <i>reports</i> and <i>events</i> over time
* Auth, because
* More...

### Stretch:

* Process <i>reports</i> to show an image alongside the first paragraph
* Comment on events
* Multiple wars (Naxal/JK/NE)
* Multiple sources (meaning that the database would have to draw data from multiple APIs)
* More...