---
layout: post
title:  "Using the Right Tools"
date:   2016-04-07 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  Hello there!  The past few days have been a bit of a whirlwind, so I'll jump right in.

<h5>The right tools and Object Oriented Programming</h5>

  If you recall, my last post was a rather <em>lengthy</em> ramble on object oriented programming, and getting objects to interact. As it turns out, I had a chance to talk about this some more with some folks, and here were the conclusions:
  <ul>
  	<li>in most cases with web applications, you only need the instance variable to be "alive" for the duration of that request, such as using an instance variable to store information regarding a particular object that you want to show or view or update or delete.</li>
  	<li>if you need this class instance to survive beyond individual server requests, then this information would typically be stored in a database</li>
  	<li>Global variables don't seem to have much protection (i.e. limitation of read/write access doesn't seem to be a thing), so should generally be used with caution. If you've got a lot of global variables going on, it's probably a good time to step back and reconsider.</li>
  </ul>
  &nbsp;

  <h5>Databases </h5>

  Speaking of databases, we jumped into SQL-land this week! Speaking of data, this would be a good time to throw in a plug for Big Data University and Khan Academy as I've found these 2 resources to be quite helpful in my previous dabbling. Khan Academy was the right balance of instruction vs. sandbox for me to learn and play with columns/queries/rows, while Big Data U's in-person meetups here in Toronto supplemented some of the rather large leaps in content I was facing with a MOOC I was taking at the time, on R programming.

  <h5>HTML/CSS and Ruby Lightning Talks </h5>

  Last week, we also had a day to decorate our very first web application, using html and css. Overall, I ended up spending an embarassing amount of time on this, and quickly cycled through the following 5 stages multiple times over the course of a couple days. I'm sure everyone who is not versed in CSS positioning witchcraft may recognize this:
  <ul>
  	<li>Denial -  I'm sure it's just a missing semi-colon or some syntax issue, let's just retry float. Hmm, absolute positioning? Ok, let's try relative. Fixed? Have we tried float yet? Ok, let's just try relative <em>and </em> float. How about absolute?</li>
  	<li>Anger - Ok, I <em>know</em> that I've set my margins and padding correctly and I've got my syntax <em>down</em><em> pat</em>. This is not me.</li>
  	<li>Bargaining - I can live with text scrolling over the banner, it's functional right? And who cares if these 2 columns don't start at the same height on the page? Win the battle, lose the fight, am I right?</li>
  	<li>Depression - I've spent <em>how</em> many hours on this? Why is this taking so long? It's<em> me,</em> isn't it?</li>
  	<li>Acceptance - I guess this is just how my website is going to look. Ok. I think the picture below pretty aptly describes this stage. Lots of head scratching, and "what? why?  um, ok, I guess."</li>
  </ul>
  <img src="https://mokokblog.files.wordpress.com/2016/04/download.png" alt="download" width="400"/>

  <p><em>Figure 1: Self portrait, created using CanvasPaint (2016).</em></p>

  Eventually, I got it working, but sure enough, this week, I attended a Ruby Lightning Talk event, which included a presentation on Flexbox. <em>If only I'd known a week ago! </em> I guess we live and learn.

  <h5>Rails</h5>

  Today, we started on Rails at last! It's been exciting so far! Finally, the content from the earlier RailsGirlsTO event on presenters was starting to click, in a vague and fuzzy way. After finishing today's assignment, I decided to play around a bit some more with creating a web application to store hiking trails. As it turns out, I think I have a knack for playing around and breaking things (but it's been fixed!). Here's what I learned in the process:
  <ul>
  	<li>Rails is a framework that ties together <em>many</em> things, including ruby, a database, html/css formatting, other dependencies, and the rails framework itself. Although the rails documentation is a good starting point, you may need to go to the documentation specific to what you are working on. For example, I tried to create a database with columns of various data types including strings, integers, and arrays to store names of trails, trail lengths and latitude/longitude pairs for trailhead location. As it turns out, SQLite3 doesn't support arrays as a column and had to be fixed through some further horsing around with migrations.</li>
  	<li>Convention convention convention. What more can I say?</li>
  </ul>
  Anyways, post over, good night! Excited for tomorrow's visit to 500px!

  p.s. speaking of 500px, and being extremely out of the loop, I decided to check out the site and sign up for it yesterday. I was immediately hooked by the positive community! Check my (admittedly quite amateur) photos out! <a href="https://500px.com/mokootsoo">link here!</a>

<p><em> First produced on Wordpress in April, 2016 </em></p>
</div>
