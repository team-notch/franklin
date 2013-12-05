# Friend finder app for jam band scene
This document is a defines what the app is, what is needed to make the app, and how the app will grow.

## Table of contents
1. General Info
2. App Functionality
3. Finances
4. Branding
5. Future of The App

## *General Info*

### Background
This app is going to be a simple friend finder app specifically marketed for the jam band scene. Users will be able to easily find their friends, campsites… anything using this app. All of us have had that moment when we lose our friends at a show or festival. We go on to create memories, but wish we had our friends around for the remainder of the show. Well, this app is going to alleviate that problem.

### Timeframe
We need to have something ready for the next festival season, meaning we need something to show people end of January or beginning of February. We need it that soon cause we have to be able to advertise/sell this. Also we need to be able to demo/test it.

### *requirements*
- THIS HAS TO WORK IN LIMITED NETWORK AREAS
- the user shouldn't need WIFI to use the app

### Goals for the app
- keep it simple, I mean simple, to use (We can add on down the road)
- get as many users as we can as soon as we can
- make it so this app becomes anonymous with concerts and festivals
- be a staple in the jam band community as a reliable, extremely helpful tool for the jam band community

## *App Functionality*

### Why would a user use this app?
- allow users to find friends at concerts/festivals
- allow users to tell friends where they are at concerts/festivals

### How does a user start using the app?
Download the app from their mobile app store. The user would create an account. All that is required is the users email (optional fields name and user name). Behind the scenes we need to do one of the following:
- create a unique ID
- log their IP address
- log their unique phone ID
- log something that is unique to that user that we can use on and offline to follow the user

### How do users find friends?
At first it will be a simple search ability. Either by searching for the users name, email, or user name.

_additional functionality_
When the user is at a show/fest there can be a list of attendees. The list could be in alphabetical order which and can be searched as well.

### How do users add friends?
After searching for friends the user will be able to "follow" ones they want by simply adding them to their follow list. (one-click and the user adds the friend)

### How do users stop unwanted friends?
We need to take into account how visible users are to other users. Privacy is a major issue with this app. The whole idea behind this app is you can find this person in a huge crowd easily by walking to their location (their phone acting as a beacon). So how do we keep from the user having unwanted friends following them?

_possible solutions_
- take a Facebook-like approach: have the user approve friends
- take a Twitter-like approach: when someone "follows" the user send the user a email informing them with a link to "block" the new follower

### How does the user tell friends where they are?
That is the beauty of the app, it automatically tells friends were you are. How is this done? I am not sure…

*requirements reminder*
- THIS HAS TO WORK IN LIMITED NETWORK AREAS
- the user shouldn't need WIFI to use the app

*possible solutions*
- phone relays its location every 10 minutes…
- phone is constantly updating its location if the user moves
- Geolocation API (http://dev.w3.org/geo/api/spec-source.html) **Note** I actually have no idea if this relates
- HTML5 Geolocation (http://www.w3schools.com/html/html5_geolocation.asp) **Note** I think the user need internet
- Google Maps Geolocation API (https://developers.google.com/maps/documentation/business/geolocation/) **Note** I haven't actually read this, but it might be something we can use
- Moves API (https://dev.moves-app.com/) **Note** I have no idea if we could plug into this
- figure something out like Moves did (http://www.moves-app.com/faq) **Note** this would be time consuming

## *Finances*

## How will this app make money?
This app can make money several ways:
1. user purchases of the app
2. selling advertisement on the free version of the app
3. selling the app as a plugin for festivals to plug into their existing schedule apps (or other mobile apps)
4. selling data on our user base
5. *down the road* expanding on what the app offers to become a all-in-one mobile solution for festivals

## What costs are there for creating this app?
- OUR TIME
- hosting
- advertising

## How can we pay for advertising?
- investors? (Cousin Bagel)
- paying out of pocket **NOT GOING TO HAPPEN**

## *Branding*

### What is _branding_ for a mobile app?
- advertising: without users we don't have an app
		* how/what is advertising?
- the logo: we need something that lasts with people, is recognizable, and promotes exactly what our app does/is
- website: make this something that blows people away and is connected via other jam band websites (i.e. jambase.com)
- app store: proper copy/screen shots will really help get this out there
- youtube helper videos: another way to reach users

### How/what is advertising?
- 

### Related Words/Phrases
- Location
- Map
- Where I am
- Where are you
- Concert
- Festival
- Fest
- Locate
- Come Across
- Locator
- Pin
- Geolocation

### Possible Names
- Phriend Phinder
- Phriendship City
- Phriends
- Phinder
- Showgo
- Rageside
- Franc
- Phranc

## *Future of The App*
Above is just the beginning. We should and can expand upon this app and the industry. 

_enhancements/future/ideas_
- Friend suggestions that are around you
- If the user sees a band and likes them they can thumbs them up and maybe view future shows/info.
- Ability to drop a pin for the persons campsite, or something else (like a great vendor, artist, anything)
- Ability to see what shows/festivals are in your area (user would have to put in their zip and we find next shows/fests within 100 mile radius)
- add upcoming shows to personal calendar and invite friends
- Expand the app to be a all-in-one app for festivals (schedule, festival info, etc.)




