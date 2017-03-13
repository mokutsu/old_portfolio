---
layout: post
title:  "Teamwork and Mob Programming"
date:   2016-04-15 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  Hello there! When we talk about the core functionality of an app, it can be difficult to come to a consensus for some things as basic as "what does this app need to function?".
Today, we got our feet wet in our first free(er) form team assignment to develop an application for customers to be able to make dining reservations at restaurants and it was helpful to let the notion of 'this is common sense, isn't it?' take a back seat to 'ok, let's hear it'.

I am luckily a member in a group of 4, very competent and friendly people, and sometimes that means that we're all very vocal when we disagree. It was really interesting to hear 4 relatively quiet(er) people have such a lively discussion. I think overall that it was an extremely helpful exercise in figuring out what exactly an application must do in order to function, and actually convincing ourselves of the priorities that we'd set for ourselves.

For example, we discussed that the restaurant model (in the MVC) must have some sort of logic to reject reservations if the restaurant would exceed its capacity. It seemed quite clear to me that there was no point in having an application to make reservations if you could make as many reservations as you wanted without input from the restaurant of any sorts. However, we then started discussing other factors like restaurant hours, days of operation, that would also factor into how useful this application would be in the real world. We then realized we had 4 school days to achieve this and it's been less than  a week since our introduction.

Understanding our limitations, we decided to make assumptions in order to progress forward, and left such logic as restaurant capacity and hours of operation to our second sprint (yes, we are making quite small sprints, but I think this helps us in producing a functional app when we approach our deadline!).

After we worked out our plan on the white board for a couple hours, we progressed to quartet-programming (programming with the power of 4 eyes on 1 screen!) for the initial creation of the repository, the rails project, the models, controllers, routes and some views. It initially seemed a little clumsy at first, but it quickly proved its worth. I can see how this would be extremely helpful for:
<ul>
	<li>agreeing on and visualizing the models, model relations</li>
	<li>agreeing on and visualizing  controllers (and their actions), necessary views, model relations and how the routes are related to each other</li>
	<li>agreeing on naming conventions and how to break things up so that it's easier to format down the line (e.g. everyone using divs at each level of their forms)</li>
	<li>picking up typos</li>
	<li>having someone look for logical errors, other people looking for syntax errors, and multiple eyes to comb through the code</li>
	<li>keeping the team informed of changes or difficulties as they're encountered</li>
	<li>getting exposure to other people's strengths / your own weaknesses and vice versa (e.g. I'm ok with visualizing routes and how they relate to actions/models and model relations, but I'm terrible at remembering syntax)</li>
</ul>
Moving forward, we'll be breaking into pairs, but this was a very helpful exercise. It'll be interesting to see, at some point down the line, how this process works with a test driven development approach, or if a larger, more diverse group of people are involved in the planning phase.

Anyways, onward to rails guides! Woot woot! (...sigh...)



<p><em> First produced on Wordpress in April, 2016 </em></p>
</div>
