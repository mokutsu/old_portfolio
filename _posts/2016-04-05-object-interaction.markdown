---
layout: post
title:  "Object interaction"
date:   2016-04-05 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
  <p>Hello there!  So as I've been learning more about object oriented programming in general, I've come across the following:</p>

  <em>I know everything in ruby is an object, and I know objects have a state and behaviour. But how do I get objects to start interacting with each other? </em>

  <p>I think this is an interesting topic because a lot of introductory online resources seem to assume that the reader is so overwhelmed by the thought of breaking down the problem, that stitching the objects back together to serve a purpose is an afterthought in comparison.</p>

  <p>I admittedly struggle with approaching problems with an object-oriented mindset (i.e. single-MEGA-multifunctional-block-of-code-that-is-contained-in-a-class-because-it-has-to-be-itis). Partly, this was because it functioned. Partly however, it was a product of avoidance; I was avoiding breaking problems into classes because I didn't really <i>get </i>why anyone would ever want to go through the unnecessary hassle of trying to get objects, especially of different classes, to play nice with each other.</p>

  &nbsp;

  <p>I decided to tackle this head on this past weekend by identifying how others were doing this and comparing them.</p>
  <h5>Approach 1: Inheritance</h5>
  <p>This is the classic approach that people seem to teach, with the caveat that inheritance implies a certain flow to the relationship between two Classes, or a hierarchal structure.</p>

  <p>This remains an important tool in getting information such as variables and methods from within a superclass (the parent class) to be accessible from within a child class.</p>

  <p>For example, if you have a method for calculating a strain-stress curve for materials, perhaps you could contain one model relationship in the parent class, and contain individual parameters/variables/data points into child classes of specific material types.</p>
  <h5>Approach 2: Class Instances as Instance Variables and Class Variables in Other Objects</h5>
  <p>When two different classes have no parent-child relation or real inheritance structure, this is one workaround that I've seen floating around our class members' github portfolios. Admittedly, this is also an approach that I've tried, and I think that it works and there are times that this can be appropriate. If this is done, the parameters and methods of the instance stored as an instance variable become visible to the class that is hosting the instance variable (meta, right?).</p>

  <p>For example, our week 2 project consisted of a Mars Rover project, in which we provide maximum grid extents, a starting position and instructions to move/turn to a rover so that it can explore the specified area. When I first approached this problem, I managed to crank out a functional mega block of code that did the job (see my earlier github commits <a href="https://github.com/mokutsu/object_oriented_programming">here</a>). This past week I decided to revisit this problem, and tried this approach in solving the problem (see my github commits from earlier last week). This solution technically functions, but I've found that this can get messy/confusing and perhaps should be used with caution or sparingly.</p>

  <h5>Approach 3: Class Instances as Inputs into Other Instances' Methods</h5>
<p>  Although this seems like a technically valid approach, I tried to avoid this method as it seemed like input validation could sometimes be difficult.</p>
  <h5>Approach 4: Global Variables</h5>
  <p>Reviewing the notes, I'd realized I'd completely forgotten about global variables. I ended up using these in combination with approach 2 to solve this issue.</p>


<em> First produced on Wordpress in April, 2016 </em>
</div>
