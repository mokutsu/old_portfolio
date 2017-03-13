---
layout: post
title:  "It's been a while"
date:   2016-05-16 08:50:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  Hello!  It's been a while! It's just been very busy, and blogging has taken a back seat. Since the last post, a lot has happened. To name a few:
  <ul>
    <li> We worked through our final projects, Walk This Way </li>
    <li> We had our final presentations and wrapped up the active learning portion at Bitmaker, a coding boot camp that I've been enrolled in </li>
    <li> We've started going to interviews and the hiring process </li>
    <li> Starting our own education (sans training wheels!) </li>
  </ul>

  <p>There's a lot that I want to write about. How much? *so much*. I'll try and wrap up a few things that I really wanted to share, and will hopefully get into in more detail in the coming weeks. I'll try and focus on a few of the major ones here.</p>

  <h5> Final Project </h5>
  <p>Over the course of the last 3, 4 weeks at Bitmaker, we got to gather into groups and present our work to the class and to the community. After each of us pitched our ideas for final projects to the class, in what feels like aeons ago, we gathered into groups of 2 to 5 to chip away at the projects we'd selected. For my final project, I ended up joining forces with 3 team mates and created 'Walk This Way'.</p>

  <p>I have to emphasize how amazing these team mates have been. We all wanted to learn to do everything, and everyone was so open, and easy to work with, each bringing a distinctive style to the group. One member patiently mentored us through the intricacies of CSS and had such a great eye for design and bringing this project to life. Another member was so detail oriented that pair programming boosted our coding efficiency was noticeably better. Another member was so ambitious and positive that she tackled all the trickiness of OAuth and uploading images to the cloud. I had a great time coding with these ladies. I don't think I've worked with a team that was so openly honest about starting to get hangry. (Note to reader: I'm not just saying this as an upsell! Please do contact me to get in touch with my team mates!).  </p>


  <p>Anyways, enough gushing for now, back to the technical stuff. Ok, so for our final project, we created a website for users to share their neighbourhoods by sharing their favourite walks, and likewise finding new walks posted by other users. We worked intimately with the Google Maps API, and found a few funny bits, that are hopefully helpful to future users trying to integrate Google Maps and Rails.</p>


  <h5> Integration with Asset Pipelines </h5>
    <p>One of the first big challenges that I faced was understanding how to integrate the Google Maps API with the Rails framework. This was initially more difficult than expected for 3 primary reasons:</p>
    <ul>
      <li>The examples provided in the docs show inline javascript. This code would ideally reside in the asset pipeline, and be seperated from the View layer </li>
      <li>Load order of assets in Rails is sometimes a bit confusing with the google maps API. Google maps works by attaching javascript to a specified DIV. This means that the DOM elements must complete loading before the javascript is run to prevent errors. </li>
      <li>Most of the basic examples in the Google Maps documentation shows a script tag with an API key that actually includes a call back to the function, 'InitMap'. </li>
      <li> Turbolinks uses AJAX calls and therefore 'piles on' the javascript if it is included in the body of the document </li>
    </ul>

      <p>Based on the above, we ordered our script tags and requirements to first load the page, and then load the javascript, and moved all tags into the head of the document. We also ended up cutting out the callback from the Google Maps API key, and getting it to run after page load using JQuery event handling.</p>


  <h5> Bundled Functions, Nesting, Limiting Calls (JS Spaghetti) </h5>

    <p>After working on our javascript files for a while, I noticed a few things. I ended up asking the instructors and doing some research to try and figure out how to make things a bit more readable. Below is a table of some of the problems and fixes done relating to JavaScript.</p>
    <br>

    <table id='blogtable' class='table-responsive table-bordered'>
      <tr>
        <td> <b> Issue </b> </td>
      <td> <b> Solution </b> </td>
      </tr>
      <tr>
        <td>Our google maps functions were running on every page, even ones where the DOM element didn't exist </td>
        <td>We ended up wrapping functions in 'if' statements, so that they would only run on pages that we wanted them to, such as only on pages with a DIV we'd reserved for a map to be attached to. </td>
      </tr>
      <tr>
        <td>Our javascript was getting nested 6, 7 deep. Messy.</td>
        <td>I ended up going back and making independent functions out of the deeply nested functions all contained within the same closure. Where variable scope was limited, I passed variables into these functions in their call backs. Likewise, I started giving names to anonymous functions. </td>
      </tr>
      <tr>
        <td>We had functions that were doing some really big tasks in one go. For example, at one point, we had a function that took a JSON object from the server, formatted the JSON, fed it to the Google Maps Directions Services, inserted the returned written directions into a dom element, and plotted the path.   
        </td>
        <td>In line with the previous 'nesting' issue, we broke out this massive function into several smaller functions. It also became more reusable in the process! Win win.
        </td>
      </tr>
    </table>

    <br>
  <h5> Migrations </h5>
  <p>As Murphy's law would have it, I ran into migration issues on the Saturday night at 10pm, 3 days before we were presenting. This was also one of our first projects that we were deploying to Heroku, and had to deal with different environments.  In the previous week, at some point, I deleted a migration, and had caused a rift between the schema produced by the raking the migrations, and the schema as shown in the shared repository. We therefore ended up with an error where we were trying to add a table that already existed, which caused all of our migrations to be aborted. Not good.</p>

  <p>Some intense googling ensued, and I ended up reading. A lot. As I understand, Heroku is generally non-destructive and therefore, we cannot use 'drop table' in the production environment. What we therefore did was try and fix our local migrations as much as possible and test locally before deploying to minimize the head aches from deployment.</p>

  <p>To fix our local migrations, I ended up writing several more migrations, some that helped the problem, and some that made them worse. After a day of investigating and trying things, I ended up writing a conditional migration, that would drop a table if it existed, and re-add the table in a subsequent migration. I cloned the entire repository and ran the migrations again to make sure fresh copies were compatible, and each group member tested the migrations on their local repository.</p>

  <p>I think this really drilled into me that we can only move forward with migrations. Deleting old migrations is BAD NEWS. It also highlighted to me a lot of the magic that ActiveRecord, the Rails ORM, was handling for me behind the scenes. On one side, it was great that it did so much, but on the other hand, it was incredibly frustrating trying to find the correct syntax and extricating the scope of some of these functions (would this function nuke all tables in all environments? does that function just drop the contents of the table, but the tables still exist?). We were extremely fortunate in that we were not in a live environment and had the option of dropping a table. In the future, I know that this isn't a good solution and a closer look is required.</p>

  <h5> Time Limits </h5>
  <p>One of the toughest things that I had to swallow was recognizing the trade-offs we were facing between how much we wanted a feature and how long it would take to code (with the added dimension of how long it would take to code a simpler alternative).</p>

  <p>For example, we really wanted a clickable interactive form for users to submit their favourite walks. Thinking through this process, it seemed doable. Have an event listener on the Google Maps that registered each click on the map, takes the latitude/longitude of the click, and pushes it onto an array. Draw a polyline on the map as the user clicks on the map. Submit the array of coordinates to the backend for saving.</p>

  <p>However, in reality, after playing with the API, there were some complications that we didn't anticipate. For example, the Drawing library within the Google Maps API allows for users to click on maps and draw on the map as they please. However, users can click anywhere on the map and therefore, validation of clicked locations was a bit of a concern. Likewise, it was unclear how we would geolocate clicked locations if they were drawn on as simple polylines.</p>

  <p>We therefore ended up using a text-based form for users to submit locations. Given more time, we ideally would have had both types of forms, but with the time constraints as is, we had to settle. I'm still amazed at the product we made, but it was a learning to see this trade off.</p>

  <h5> Typos </h5>
  <p>Lastly, typos. I can't count how many hours I wasted on typos. It's upsetting. For example, I spent literally 10 hours trying to make an AJAX call to post comments work. There were 2 issues: the 'POST' request kept being sent as a 'GET' request, and the URL kept being converted to: "localhost:3000/walks/object%2Object". I checked the form attributes I was referencing for the URL ($(this).attr('action')). I tried converting it to a string. I tried adding a data attribute. I tried explicitly attaching a string as a data attribute onto the form. I tried reading the docs. I tried searching Stack Overflow. I tried *a lot* of things. As it turns out, I had the attribute field, 'URL' attribute in my ajax call capitalized, which was causing the action field to be interpreted as an object? It ended up working, but the amount of time wasted on typos like this were insane. I can really see how pair programming would have really sped up this process!</p>



  Anyways, I think that's about all that I can recall at this point, I hope to make another post on things I've been learning since Bitmaker's finished, and the search for a job. Cheers!

</div>
