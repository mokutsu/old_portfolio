---
layout: post
title:  "Ajax. Down the Rabbit Hole"
date:   2016-04-28 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  Hello!  First things first: Ajax. Ahh, ajax *sigh*. I will warn you that this is yet another selfish post, where I try to justify what I've learned to myself. I hope it remains interesting to you regardless.

  After a few days of working with javascript and JQuery ($$$), we had our first introduction to AJAX. This morning's lecture started off ok, but ended with a sore forehead (from furrowing my eyebrows so much. I didn't know this was even possible). That said, after reviewing it this afternoon I think it makes a bit more sense, but the more I thought about it the deeper the rabbit hole went.

  <h5>Taking a step back from the rabbit hole</h5>

  We keep hearing the word, 'asynchronous', and initially seemed a bit 'jargon-ey'. That said, it turned out to just means that a task is requested, and while that task is being processed and returned, other things are being done. This raises the question, 'what is doing the task? Is the browser asynchronously? Is it the server dealing with requests asynchronously?'. As far as I understand, javascript is handled asynchronously, and it is therefore the browser that is handling asynchronous requests. If javascript is special for its asynchronous execution, then we can infer that typical scripts are not asynchronous, and therefore synchronous, or sequential.

  In addition, I found it helpful to revisit the DOM tree and its contents, in order to understand what AJAX did, in comparison. The DOM tree is comprised of the window object and the browser object. With each full HTTP request (regardless of which of the RESTful actions we are taking), the DOM tree is regenerated.

  <h5>Peeking at the rabbit hole </h5>

  JQuery is a tool we can use to work around this necessity to regenerate the whole DOM tree (which would take a lot of time for intensive site and be pretty data-heavy). JQuery is a javascript library which facilitates writing of javascript code for user interaction on web sites. At this point (6 weeks into a boot camp ...) I finally realized that a library is not just some static reference document, but it is a document that ties shorter code that we write, to a fuller form that is actually executed when the code is processed. The crucial bit here is that the browser is able to map the code that we write to the fuller form and executes it accordingly.

  Knowing this, JQuery is a library of ways to manipulate the DOM. It also contains methods of tying these DOM manipulations to events initiated by a user interacting with a web site. In JQuery, we select DOM elements by their html/css identifier, and then apply a manipulation to it. We can also tie 'event listeners' to these html/css elements, and react to these events. In typical JQuery, everything is handled solely by the browser and as such, additional information is included in the front-end code. For example, if we want to insert a new html element using jQuery, we specify what this element is being appended to, as well as the html element itself (is it a div? is it a list item? what text does it contain?).

  <h5>Stepping into the rabbit hole </h5>

  Now, going back to AJAX, what is its state (if we're thinking of it as an object) and what does it do?  The wikipedia page provides some helpful resources, including the following:
  <em>'Client-side technologies / techniques that allow two-way communication between the client and the server'.  </em>I think most definitions I've seen tend to indicate that AJAX is not the technology itself, but it refers to the technique, or method, that is done using several technologies (including asynchronous JS, XML, Json, etc). It is also a function in jQuery.

  The way that we are using AJAX, it is almost a tool used in a subset of jQuery cases. Ajax is used to bridge the browser-server divide, request information and retrieve information from the server for rendering in the browser page. The result is a manipulated DOM element (with the remaining DOM tree staying the same), with changes reflecting information from the server. For example, if we wanted to show a few list items each time a ('show more') button was clicked, we could use ajax to retrieve a partial 'view' page containing a few additional items, then insert it into a jquery request to append this information to an existing DOM element.

  &nbsp;

  <h5>Why does it even matter? </h5>

  At first, when I heard about AJAX and jQuery, I struggled a bit with understanding why this even mattered. Being able-bodied in a metropolitan area with decent internet service, it's easy to forget why this matters. However, in addition to the accessibility issues that we discussed in class, I started thinking of specific cases where the load time affected what sites I visited. In each case, a careful consideration of initial load vs subsequent loading would be helpful:
  <ul>
  	<li>Internet can still be painfully slow in remote areas. For example, when i was working from a motel room in Terrace Bay, I could only access the 'light' version of Outlook, gmail, because things took so long to load. Sub-par internet is still very real for a lot of people. AJAX would have made the request/response cycle easier, but the initial load wouldn't complete in time.</li>
  	<li>More recently, when I've been trying to use the free wi-fi on the subway, the load time for a full request/response cycle plays a big part on what web sites I visit. For example, today I attempted to visit coursera, but couldn't even get past the initial sign in , before leaving a stop and the internet cutting out. In contrast, I am able to read individual emails from my inbox in gmail even while the internet is shut off because it is part of the initial loading.</li>
  	<li>Being on a 350 mb data plan, I'm relatively aware of what I use the data on my cell phone plan for. If ajax can help reduce the amount of full request-responses and reduce redundancies, this is good news.</li>
  </ul>
  As we learn more about these technologies, I think it'll be interesting to see how we can actively make choices to integrate progressive enhancement and graceful degradation into our web application designs.

<p><em> First produced on Wordpress in April, 2016 </em></p>
</div>
