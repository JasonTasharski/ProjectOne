# THREE WARS: <small> Tracking India's Insurgencies </small>

People die in the wars you haven't heard of, too.

## Done:

* Index.html shows multiple events with multiple reports (hardcoded), via templates
* Database exists and is running
* Schema for <i>events</i> and <i>reports</i>
* Kimono API (two articles, one source)
* All that works locally works on Keruho
* Navbar exists and is ready to do things
* Tests test; tests pass when they should
* SERVER CONNECTS TO API!!! :D :D :D :D <3 <3 <3 <3 <3
* .env does its thing

## Doing:

* Reset API key! Otherwise, all that .env shit is sort of pointless!
* MonGodB everything; Czech notes slacked by Jane
* Process JSON data from API on the server side - make it into new objects, and save them to the MonGodB; request the data in the MonGodB, and put it into that beautiful template stuff

## Doing AUTH Outside-In:

* Czech notes

### Sign-up, then Login, then Log out

* Make the modal; then test
* Send form data to server; test
* Repeat for login and logout

### Continue backendwards:

* Add hashing, middleware, "create secure" stuff

## To Do:

### Minimum:

* Set up requests to connect mongoDB to Kimono API (Manually create events to hold Kimono reports)
* Expand Kimono API to test more throughly
* Make API update self daily, with a max of ~10 items (can always make it larger later)
* Produce an event for each report
* Check to see if an event for a report's date/location exists; add that report to that event if it does; make a new event for that report if it doesn't
* Process <i>reports</i> to get dates and locations from them; use those to create <i>events</i> with those dates and locations (and types? deaths, injuries?)
* Process <i>reports</i> to show the first paragraph of each (plus url/source/date/location), saving and hiding the full text
* More...

### Stretch:

* Process <i>reports</i> to show an image alongside the first paragraph
* Comment on events
* Multiple wars (Naxal/JK/NE)
* Multiple sources (meaning that the database would have to draw data from multiple APIs)
* Be disappointed that Moshe Dayan wasn't hot despite having a badass eyepatch
* Make a script to get data from the API every day
* Is it possible to make the API send a message to the server, indicating that it has updated and is ready for the server to update?
* More...

# AT SOME POINT, LOOK INTO "EJS"