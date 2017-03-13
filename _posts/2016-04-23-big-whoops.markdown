---
layout: post
title:  "Big whoops and Merge Pains"
date:   2016-04-23 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  Hello reader! This week has flown by! There has been a lot learning and a lot of things going on. First things first, Seat Yourself. Seat yourself is the name of our group project that we started working on last week with a purpose of connecting diners with restaurants. While we were working on this project the day before it was due, we noticed some strange things. Errors we thought we'd fixed were back. Then, when we checked out one of our controllers, whole methods were missing.

  As it turns out, once we broke off into pair programming, we would commit and push to the origin. However, I had managed to pull changes, carelessly accepted crummy merging and pushed to the origin master. BIG whoops. I don't remember the exact details of what happened, but looking through our commits, I'm assuming that in my rush to wrap up the work for the day, I'd rushed a commit and caused a massive error. Thankfully, my team members were incredibly forgiving and nice and helped us get back on track ASAP. I think there's 4 major morals of the story:

  <h5>Slow down to speed up</h5>

  I hate this idiom, but I absolutely see the value in its message. When I was a kid, I was constantly told to slow down and focus, in order to stop making careless mistakes. Even as an adult, this still holds true. It's exhausting, and requires immense strength of will but it's absolutely true. When we mess up because we're rushing, especially something as big as the mistake I made, there isn't a good excuse.

  <h5>Commit commit commit, and write descriptive messages. Check commits!</h5>

  When we did realize there were big commit errors, we called for help and ended up going through gitx to find out exactly where we lost all of our data. As it turns out, we hadn't caught this until 5 commits and a few other merges had happened. We were strongly encouraged to check gitx every time we do a merge and just make sure things were ok.

  One thing to note is that gitx only seemed to colour the first line of entire sections that were deleted or added. The positive and negative signs were used to keep track of what happened, and we ended up copying and pasting our code back into the controller.

  <h5>Have a great team. Appreciate team members. </h5>

  This mistake could have completely soured our team. It wasted a few <em>hours</em> in a program where time is so limited. Instead, my team members were incredibly forward thinking and focused on finding the 'where is the problem', without focusing on the fact that <em>I</em> had done this. No one yelled at me. Instead, they focused their attention on solving the problem and fixing our program. I am honestly so thankful they reacted the way that they did.

  Afterwards, we were required to submit a single group submission, so we submitted my github page, and all decided to fork as a bit of a failsafe (and I made a clone for a version 2.0). In case you are interested, the work in progress is at: <a href="https://github.com/mokutsu/seatyourself2">https://github.com/mokutsu/seatyourself2</a>.


  <h5><strong>2. Javascript</strong></h5>
  Second thing about this week: Javascript. We've taken a dive into the world of javascript and jQuery. It's been pretty interesting comparing the similarities and differences between Javascript and Ruby. Javascript seems to have less built in features which can be frustrating and some concepts such as 'this' are still proving to be tricky. However, being a bit of a 'verbose' programmer, at this point, I really like the explicit looping conditions that Javascript.

  Debugging in javascript has also proven to be challenging, and using the right tools becomes key.  After struggling with debugging with node in the console, it became clear that I should be debugging in the browser. The dev tools provided in Chrome are friendlier, and allow for more 'poking and prodding' to see what variables are being set and which ones aren't working.  This has highlighted the need to code in chunks and test more frequently to see what's working and what is not as well. It looks as though slowing down to go faster will hold especially true as we get deeper into JS.

  In rails, we were able to see the error thrown back by the framework, correct it, receive the next error message, and continue to build the website in an 'error-driven development' methodology. At this point, it doesn't look like this will be an effective way to write code with javascript, which will be challenging. However, hearing about some of the ways that javascript is being applied across the board, I am very excited to learn more and play some more with this language.

  &nbsp;

<p><em> First produced on Wordpress in April, 2016 </em></p>
</div>
