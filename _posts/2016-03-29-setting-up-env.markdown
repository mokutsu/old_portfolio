---
layout: post
title:  "Setting up the Environment"
date:   2016-03-29 12:07:15 -0400
categories: webdev
---
  <div id = 'summary' class='col-md-12' >
<p>Hello there! Before I jump into the details of my first week at Bitmaker, a coding boot camp here in Toronto, I wanted to share some notes from setting up my working environment. Although I learned a fair amount, I hope your set up experience goes far more smoothly than mine did!</p>

<p>As part of the prep work before the course, we were asked to set up our developing environment. Long story short of it, I tried out Mint and Ubuntu, and am now a mac user. Check out the details below.</p>

<h4>Adventures with Linux Mint</h4>

<p>Remember that time the Linux Mint website got hacked and the url was redirected to send users to download a compromised copy of Mint in February, 2016? I sure do. I was one of the affected people. I downloaded a copy of Linux Mint directly from their website on February 21, 2016, and used it to create a bootable USB stick for my laptop. I then ran Mint on my computer for a day or two before hearing about this attack, and starting damage control. As someone who is a linux newbie, it did feel like a bit of a trial by fire. Below are some of the major learnings I had, which will also hopefully help you in not being a sucker like me!</p>

<h5>1. For open source software, a centralized copy of software is not necessarily safer than a distributed copy.</h5>

<p>If you are a windows user (like me), this may seem a bit backwards (even 'ass backwards, excuse my french). We are used to software being released in a very top-down structure from a specialized centralized body, who is responsible for releasing reliable software. Surely it is in the company's best interest to produce quality software, right?  Well, when it comes to freeware and open source code, these generalities kind of don't apply.  The compromise itself was fairly simple, in that the website was hacked to redirect the download link to a compromised copy of the software. This means that copies that were available via torrenting (i.e. the copy distributed throughout the community) were predated this hack so people that downloaded from the community were generally not affected. Online discussions seemed to agree that shared copies are generally more reliable than single-source copies.</p>

<h5>2. Check the hash key and make sure it's legit.</h5>

<p>Once I found out that the copy that I had was downloaded on the affected date, I decided to disable the wifi and turn off the computer while I did some major googling and searching. Luckily, I had a work laptop available at the time to be able to read along as I did my trouble shooting. I ended up trying several command line prompts, third party software and several swings between complete confusion and "i think this is working *maybe possibly* ", and finally got to produce a md5 checksum which inevitably did not match the official values posted by Linux Mint. Had this hack not happened, I probably would still not know about SHA1 keys and md5 check sums. This was one of the real kickers that made me feel like I didn't even know how ignoratn I was.</p>
<h5>3. Linux-based viruses and intrusions may or may not affect both sides of a partition.</h5>

<p>After doing some further googling, I found out that fewer malicious software is generally written for linux based systems, the windows side of a computer may still be compromised by viruses encountered while using the linux side (or so the internet suggests...). Because of this, I labelled the USB stick I was using as compromised, deleted the ISO file, did a couple different scans on the windows side. Overall, nothing was found so it does appear that no harm was done, but I figured it's always better to play it safe.</p>

<h5>4. Notes actually pertaining to Linux Mint</h5>

<p>The user interface was generally quite similar to Windows and so the transition was quite smooth. The layout seemed fairly intuitive, with minor differences upon first glance. However, I did not get to explore the system very much and was a bit hesitant to re-download mint after this experience.</p>

<h5>5. The online community is generally quite informative and helpful when issues arise.</h5>

<p>The last learning from this foray into Mint was the incredible helpfulness of the online community when it comes to these issues. Recognizing that it was some strangers on the internet that caused this debacle, most people were quite helpful. Being such a newbie, I was completely out of depth and learning about these security issues for the first time. I turned to the reddit mega-thread for information specific to my situation (e.g. what if we've downloaded mint onto a USB? Will the windows side be partitioned? Do I need to incinerate my laptop?). Sure enough, within 24 hours I got a few responses and was on my way to starting damage control. Incredible.</p>

<h4>Adventures with Linux Ubuntu</h4>
<p>After this foray into Linux Mint, I decided to jump into Linux Ubuntu instead. This distribution was selected for its popularity and user-friendliness, in addition to not being Mint (which was still a bit of a sore topic for me at this point). I therefore used the Windows tools to partition my hard drive and load in Ubuntu directly onto the computer.</p>

<p>Overall, the partitioning was a success and I got Ubuntu up and running! The layout was a good compromise between Windows and Mac (with the icon-based side tool bar, and hovering menu bar at the top) in terms of the user interface. However, in the process, I learned a few more lessons:</p>

<h5>1. It takes patience</h5>

<p>Nothing that I wanted to work was working out of the box. Want to use Google? Well, that's too bad, because the program will want to load as a black box because an option is disabled or an extension is missing. Want to use Netflix? Same deal. Whoa, and installing antivirus software? Better open up google to see what anti-viruses there are,  which ones actually have a GUI, and which ones only run when a scan is being called (all of these things that I'd taken for granted as a windows user!). Furthermore, not all linux distributions have the same installation procedure, with download pages for software often including 4, 6 links to different versions of the same software! I ended up successfully installing bitdefender, but overall, setting the laptop up again took a few days, with all the road bumps.</p>

<h5>2. Performance reduction</h5>

<p>I am assuming that this issue was only because of the age and data usage already on my laptop, but I noticed a significant decrease in operating speed on both the windows side and linux sides of my laptop. So much so in fact, that even terminal commands were taking TENS of seconds to load. In the end, it wasn't the hiccups with downloading patches, and checking security, and all the extra research. It boiled down to a battle of my patience vs. the laptop speed. My patience gave way in short order, and I ended up joining Team Apple. I still have the ubuntu/windows laptop to work with if I want to compare things, which is a nice option. Having used ubuntu for a month, the transition to the mac was quite smooth and has generally been a great experience. I am thankful for the learning opportunity, but generally am very happy with this new computer.</p>

<h4>Final Thoughts</h4>
<p>I hope this post has been entertaining and informative to an extent.
On a side note, I also found a great resource regarding UNIX based systems in all this googling, linked below! Happy easter Monday! Onward we go!</p>

<a href = 'http://www.tutorialspoint.com/unix/index.htm'> Tutorials Point - Unix </a>

<br>
<em> First produced on Wordpress in March, 2016 </em>
</div>
