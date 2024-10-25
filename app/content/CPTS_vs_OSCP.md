---
title: "CPTS vs OSCP: Which Certification is Right for You?"
Description: Learn about the differences between the Certified Penetration Testing Specialist (CPTS) and Offensive Security Certified Professional (OSCP) certifications to determine which one aligns with your career goals.
Published Date: "2024-10-25"
Author: madf0x
Read Time: "10 min read"
tags: ["CPTS", "OSCP", "HTB", "Pentesting", "Certifications"]
---

Certifications are a valuable asset in the cybersecurity industry, demonstrating your expertise and commitment to continuous learning. Two popular certifications in the field of penetration testing are the **Certified Penetration Testing Specialist (CPTS)** and the **Offensive Security Certified Professional (OSCP)**. Both certifications are well-respected and recognized in the industry, but they have distinct differences in terms of content, difficulty, and focus areas.

**POSTS**

CPTS vs OSCP: A Retrospective
=============================

*   [0.0 Introduction](#00-introduction)
*   [1.0 CPTS](#10-cpts)
    *   [1.1 The Good](#11-the-good)
    *   [1.2 The Bad](#12-the-bad)
    *   [1.3 The Exam and Tips](#13-the-exam-and-tips)
*   [2.0 OSCP](#20-oscp)
    *   [2.1 The Good](#21-the-good)
    *   [2.2 The Bad](#22-the-bad)
    *   [2.3 The Exam, Tips, and More The Bad](#23-the-exam-tips-and-more-the-bad)
*   [3.0 Conclusion](#30-conclusion)

0.0 Introduction
----------------

The Certified Penetration Tester Specialist (CPTS) certification offered by HackTheBox(HTB) is the new kid on the block for entry level penetration testing and many people are wondering how it stacks up to the industry standard certification Offensive Security Certified Professional(OSCP) by Offsec.

I started the CPTS course shortly after it’s announcement in November 2022 and passed the exam in July 2023. Following my certification I immediately started the PEN200 course to prep for OSCP and subsequently passed on my first attempt in November 2023 with 110 points. My plan from the outset was to use CPTS as a cheap way to increase my skills before taking on the, at the time, daunting OSCP.

A little about my background: I first started learning in the late 2000s/early 2010s and was fairly active in some hacker scenes. I went on an extended hiatus when I joined the Army and only started relearning with the announcement of CPTS. Essentially I entered the course having forgotten most things and what I did remember being severely outdated. That said I had a solid fundamentals foundation to work with and a ton of experience troubleshooting problems which satisfied the entry expectations of the CPTS course. It took me approximately nine months to complete CPTS taking the occasional long break. I started the 90 day PEN200 course for OSCP just a few weeks after gaining my CPTS certification and completed the exam shortly after my course access expired.

In this article I will be going over the CPTS and PEN200 courses, comparing and contrasting the two as well as providing some tips for exam takers.

1.0 CPTS
--------

The CPTS course covers a pretty wide array of topics. It starts off with a generic module that walks you through exploiting a basic easy box giving you a taste of enumeration, initial web entry, and privilege escalation. From there the course delves into some enumeration modules, basic metasploit usage, transferring files between attackers and victims, basic services attacks(exposed FTP/database servers and the likes), and a variety of pivoting tools and different shells that may be used by an attacker. It also includes the infamous Password Attacks module in this early phase, which we will return to when discussing my gripes with the course.

With the basics out of the way CPTS thrusts you into an extremely in depth Active Directory Enumeration and Attacks. This module is honestly the best introduction I’ve seen for hacking AD networks and if nothing else I would recommend beginners do JUST this module even if they had no desire to do the full course.

After AD is finished you’re treated to a gauntlet of web focused modules, including the usage of important tools like burpsuite and some automation with ffuf. These modules jump around significantly in complexity of information but my belief is that it’s intended to throw you a few soft balls after tackling the information dense AD module.

The web modules wrap up into a couple of privilege escalation modules. At this point in the course if you’ve been following in order you’ve already dealt with a bunch of priv esc scenarios but these modules hammer home the common array of stuff to check for in linux and windows respectfully.

Lastly we have the documentation and reporting module followed by the capstone Attacking Enterprise Networks module. The documentation and reporting module was a real eye opener for someone that had never needed to actually write up any findings before, and includes anecdotes from pentests the author has been on. Meanwhile the capstone module acts as the culmination of everything the student has learned in the course and operates as an entire simulated lab very similar to how the exam itself is structured. It is frequently recommended to enter the module “blind”, which means to start the lab and attempt to complete it in its entirety without following the guided sections through the lab.

### 1.1 The Good

Overall the CPTS course is fairly comprehensive considering the sheer vastness of the field. It may not cover everything but it covers a large chunk of key foundational topics that every pentester ought to know. It has a large focus on methodology and while CVEs and off the shelf exploits are covered and used from time to time students won’t be overly relying on them throughout the course. The course really wants students to actually understand and think about the vulnerabilities and their exploits and the module skill assessments in particular are designed with this in mind, just copy pasting commands won’t get you very far in the majority of module assessments. They generally will require really thinking about the lessons being taught and synthesizing them together to solve problems.

Most of the labs are really well designed and incorporate many of the lessons taught. I’ll often find myself revisiting some labs just because of how useful they can be for testing ideas or tackling a known problem with a different method. Students retain access to modules once purchased or completed which can provide value even for those that have completed the exam if they wanted to test something or review some notes.

The actual explanations manage to be both highly informative and remain concise. There are rarely any ‘useless’ paragraphs or lines of text. The Active Directory Enumeration and Attacks module in particular has the best explanations I’ve read for LDAP and Domain Trusts. The explanations were so good in fact that it gave me some ideas for some alternate ways to exploit some AD ACL issues which I was able to do with a little extra research. Nothing that I think is actually new or novel, but not often talked about and easily overlooked. I wouldn’t have had the tools to do so though if the taught information wasn’t as great as it is though. Seriously, this module is the star of the course.

There is an emphasis on learning multiple different tools to solve the same problems wherever available. This is extremely valuable because sometimes even your favorite tool is just not the right one for the job. CPTS isn’t dogmatic about which tools you should specifically use, but rather what approaches you should be taking and choosing the best tool based on that. It even correctly teaches that you should compare the results of different tools and approaches to ensure nothing is overlooked.

The community around CPTS is pretty phenomenal as well. There is a lot of positivity and encouragement for people studying the course and often there are several people in the discord willing to help out with questions and advice on modules and the exam. There is some risk in over relying on others’ help to complete the course which can lead to people finishing sections but not truly understanding the content, but most of the voluntary helpers are pretty adamant about not providing answers and instead leading people to solving solutions themselves.

There are no tool restrictions for the exam either. You can use whatever AI assistance or expensive paid tools you have access to. Metasploit throughout the whole exam if you want to and think you can make it work. You could even use burpsuite pro and Cobalt Strike if you have access to them. This tool freedom is excellent because the exam is designed with this in mind. No tool is going to be able to completely trivialize the exam, no matter your tool preference the best tool for the exam will always be just applying your own brain. You wont need those tools, but it is nice that you can use them if you want to.

Assuming you have the necessary fundamentals in place, the CPTS course is just a really good way to go from hacking newbie to having a solid foundation to build your skills from. Overall the course is relatively cheap compared to other courses(especially vs its main contender, OSCP) clocking in at roughly \$200 or so for the course and another \$200 for the exam.

### 1.2 The Bad

As much as I loved the course it isn’t perfect.

The biggest issue namely being content consistency. Different modules and sometimes even different sections within the same module can have different writers and they are not all at the same skill level when it comes to teaching. The majority of the course content is absolutely fantastic but every so often you’ll hit that one question/section/module that just seems bizarrely out of place. A question might be poorly worded, or a section might be weirdly lax in detail.

The Password Attacks module is very notorious for wasting students’ time. This module teaches really good information! But it’s completely hamstrung by the design of the labs. As one might imagine, a module focusing on attacking password schemes in various contexts is going to require a large amount of brute forcing. However, the majority of the module requires you to use their provided word-list and has students create a mutated longer version of this word-list for brute forcing stuff, which would be fine if it didn’t take forever! Often the chosen correct password for a lab will be so far down the list you can spend 20+ minutes on a single lab brute forcing a service before you can even start to suspect that you might have done something wrong simply because doing it perfectly correctly still takes 20+ minutes. Some students have accidentally had their labs run out of time and reset just cause they weren’t sure if they just needed to let it run just a little bit longer or if they did something wrong. It will often be recommended for some of the more egregious labs in the module to apply some ‘meta strategy’ such as cutting off the first 14K words from the intended mutated list to save time, or even ignore the explicit instructions to target a different service on the box that is quicker to brute force. All in all this is just the one module that doesn’t respect the student’s time. It may be realistic in the real world for such operations to take a lengthy amount of time, but when it comes to a learning environment being able to have rapid feedback to adjust and learn from your mistakes is so much more valuable than a vague notion of ‘realism’. The core problem with this module however could be entirely alleviated if the module maintainers simply went through the labs and changed the correct passwords to be sooner in the provided list and cut out some of the excess fat from the list as well.

Another major module issue came about with some recent updates. Historically module updates have been great, just adding new content and information to flesh out and expand modules. Lately however a lot of updates have been extremely poor. Attacking Common Applications is the biggest victim to this. Initially it was one of my favorite modules in the course, easily top 5, however it got expanded with the dreaded Thick Client sections. Oh boy. When it was initially released the labs were broken and you had to message support to have them manually verify your answers just to mark the section as completed. Additionally some of the added sections were so poorly explained it legitimately felt like a rough draft that accidentally got pushed to production. One page was literally just a handful of screenshots with incorrect captions. Frankly it was embarrassing. Public outcry against these additions were pretty severe and they had to be massively updated. Even post functional update these new sections are still considered some of the worst content in the entire platform. The material feels extremely out of place for the course, suddenly introducing reverse engineering instructions without ever instructing on any reverse engineering skills which can easily warrant its own module. I’m very fortunate I have some reverse engineering knowledge to lean on from some of my game modding days. In addition the main lab for Thick Clients is extremely lazy. It is literally just a ripped section from the HTB insane ranked Fatty box. Yup that’s right, it cribs from an insane ranked box to be included in an entry level course. The instructions for these sections are still terrible, and it’s often recommended to watch Ippsec’s video on the box Fatty for students needing extra help on the section.

The big elephant in the room however is will this certification actually get you a job? The cert is still extremely new and less than 200 people at the time of this writing have even earned the certification. CPTS will help prospects pass technical interviews but it just doesn’t have the name power yet for HR departments to really be looking for it yet. Anyone hoping they can grab JUST this certification and immediately hop into their desired job roles are likely to experience a lot of frustration. This is hampered by HTB’s bizarre insistence on requiring full completion of the course before you are allowed to take the exam. This means extremely advanced individuals beyond the target skill level who may want to take the exam to evaluate it and potentially lend their voice in support of the certification are required to slog through a course that may be significantly below their abilities but still require a high time demand.

The exam itself is also a ten day exam with many takers running out of time and needing a second attempt to finish. This poses a significant time investment which can be extremely difficult for some students.This is compounded that at the time of this writing there exists only one exam lab(and yes staff members have confirmed that it’s okay to inform people that there is only one lab so far). The exam isn’t proctored either, which may impact some employers’ perceived value in the certification due to cheating concerns. In addition during the writing of this article one known cheater(person DM’d a CPTS holder and asked about the foothold path) was reported and HTB only issued them a warning and they continued their exam.

### 1.3 The Exam and Tips

The exam itself takes testers through a simulated pentest against an enterprise client, culminating in requiring a professional report. Takers are given 10 days to complete the assessment including finishing the report. To pass the exam takers will need to employ the lessons taught from throughout the entirety of the course often in new unfamiliar ways. The exam time starts the moment you click on ‘Enter Exam’ so be sure you’re ready!

Personally I absolutely loved the exam itself! I went on an emotional roller coaster taking it. Going from extreme highs whenever a breakthrough was made to extreme lows whenever I got particularly stuck. One of my personal points of pride was being able to get foothold within the first day when the average tends to be on day two(I was by no means the fastest in this regard however!)

Everything on the exam was doable with information provided in the course content. Nothing was out of scope and indeed every time I found myself in a rabbit hole trying something out of the scope of the course it was always the incorrect path. Each individual step was nothing more complex than what you would see on a HTB easy or medium ranked box. The difficulty largely stemmed from the size of the exam and the number of steps that need to be executed. One piece of advice for those stuck in the exam is to open up the relevant module to what part you’re stuck on and go paragraph by paragraph and just throw the kitchen sink at it. There is no need to be quiet or evasive on the exam, so making sure you’re completely thorough is the most important factor for success in the exam.

One big consideration with the exam is the time factor. It is a 10 day exam and honestly for many people that might not be enough time. The exam is marketed that it expects takers to have school or full time jobs and only be able to dedicate a couple hours a day plus two weekends to finish the exam but in practice it’s extremely rare for takers to pass in the first attempt without taking substantial time off to dedicate to the exam. For my own first attempt I was only able to take one day off for the exam. Of the 5 total days I had off in my 10 day time period I easily spent 16 hour days, with another 4-8 hours on days I did work. Even then my first attempt ended partway through the notorious flag 9(widely regarded as the hardest stretch in the exam). Even so after I started my second attempt picking up where I left off I only needed two more days to finish the rest of the lab entirely and was able to spend the rest of the attempt just working on my report.

For this reason I have often been telling people that they should actually treat the exam as a 20 day exam with a mandatory break in the middle. You cannot start your second attempt until you’ve received feedback from your first attempt which can be up to 20 business days to receive. From there you have a 14 day time period to start your second attempt or else you forfeit your exam. In addition to be eligible for the second attempt you must have submitted a PDF report. Now the kicker part is that yes you do get feedback on your provided report from your first attempt, but in practice this feedback is largely just report writing advice. You will not get any hints about the section you were stuck on when your first attempt ended. Because of this I tend to recommend people ignore the report entirely on their first attempt unless they actually get enough flags for a passing score. The quality of your submitted report is not a factor in determining eligibility for the second attempt, only that a report was made, so you can literally submit an unmodified empty copy of the report template and still receive a second attempt. Therefore it’s often going to be a better use of time to spend every available hour of lab access continuing to make progress on the exam itself. After your first attempt is over and you’re waiting on feedback, that’s when it’s a good time to review your notes(you HAVE to be taking notes the whole time still of course) and work on developing your report then in preparation for the second attempt.

Of course if your particular circumstances lets you dedicate your days to the exam then this doesn’t apply to you.

The reporting requirements are not particularly strenuous though they are slightly tougher than the OSCP report requirements. You need to have a thorough attack summary and exploitation chain from start to finish as well as having a separate properly evaluated findings section. That said failing due to having a poor quality report is extremely rare. The only known instance that I have heard of was a person that wrote a whopping 300 page report(the average report length from passers is a little over 100, mine was about 130). Even then despite it being their second attempt that person was offered a several day extension(with no lab access) to rewrite and resubmit their report.

In regards to extra preparation a lot of students ask if they should be doing extra practice or taking particular HTB Pro Labs. Personally I feel this is pretty unnecessary as everything you need to pass the exam is in the course itself, and outside boxes and pro labs will often require some out of scope elements. I finished the final module and the immediate next weekend started the exam. I felt this best put me in the correct head-space for the exam, and if someone feels they must do extra preparation I would leave it for right before doing the final module that way it is freshest in your head before the exam. While I do not have much experience doing pro labs, others have recommended Dante and Zephyr as being good practice. I do not believe it’s necessary personally but those are the ones to do if you feel you must.

One last piece of advice for the exam is when it comes to pivoting: learn ligolo-ng. I learned the tool in the middle of the exam after hearing others hype its usage for pivoting even though it’s not covered by the course itself. This tool trivializes pivoting concerns and was immensely helpful on my OSCP exam as well.

2.0 OSCP
--------

I would best describe OSCP as being the boogieman of pentesting certifications. It has a steep price, a bunch of exam restrictions and tool limitations, a reportedly high failure rate, and worst of all these days virtually every entry level position demands it just to get an interview. It’s been one of the oldest entry level certifications in the field and is the go to sought after certification by HR departments. Its reputation and reach in the industry is so large that it’s unlikely anyone reading this article even needs to be informed of this. I know personally I let my own fears about the exam hold me back. I created imaginary barriers for myself due to the inaccessibility for me to even be able to attempt the exam for so long.

But honestly? OSCP is all flash no fire.

### 2.1 The Good

OSCP is highly regarded by HR departments and aids in trying to get interviews for those seeking to enter the field.

Offsec takes cheating extremely seriously, notoriously so. The exam is heavily proctored and all times there will be someone watching your screen during the exam. Getting caught cheating can not only forfeit your attempt but also black list you from all future Offsec certifications as well, which given the high demand for such certs in job searching can be a career death sentence for some people.

The PEN200 course also covers a couple of sections that CPTS does not, namely very basic AV evasion and creating malicious files for phishing clients. Granted these sections are out of scope for the exam itself and completely skip-able by anyone looking to just pass the exam, but it’s still nice that they’re there.

The challenge labs include a few retired OSCP exam sets, which can be handy for getting used to the style of boxes OSCP uses.

Probably one of the best features about the PEN200 course is that it is entirely optional. You can purchase the exam and immediately schedule it without touching a single section of the course, which indeed depending on your skill level you may want to do.

### 2.2 The Bad

Time has not been kind to the PEN200 course. Despite recently going through some serious overhauls, ditching the outdated PDF and replacing it with outdated THM / HTB Academy styled modules instead. Most sections have the most bare-bones minimum explanation and the associated labs seemed put together with little thought. Oftentimes even final module labs would just be copy paste answers from earlier sections. When it wasn’t it often instead would just be random stuff that only loosely involved the topics at hand.

The active directory modules were especially bad. They mostly focused on employing old outdated manual powershell scripts and barely acknowledged that staple modern tools such as crackmapexec(or netexec if you’ve kept up with the drama around the tool) and impacket exist. I got so frustrated with how boring and obtuse the content was that I started challenging myself by just skipping to the labs and completing it with my own preferred methods.

I know some people claim that you can pass OSCP with just PEN200 knowledge but I struggle to see it. The content is so bare-bones that in my opinion anyone saying it was all they needed are either extremely talented or severely underestimating how solid their foundations are. The high fail rate makes a lot of sense if most students are just relying on the course to see them through. I feel the low quality of the training materials makes the exam seem like it’s a lot tougher than it really is.

The lab environments tend to be pretty unstable. My generated openvpn configuration file for the labs was just broken and I had to manually edit my config to fix it.

Of course the biggest issue with OSCP is the cost. The basic 90 day lab access and exam is \$1599 and even a retake fee is \$249. This can be extremely cost prohibitive if you don’t have a workplace covering it for you which seems to be getting rarer and rarer these days, especially as new positions are requiring the cert to even get an interview.

### 2.3 The Exam, Tips, and More The Bad

At its core the exam is a disjointed CVE fest and very basic hacking 101 exploitation. The exam doesn’t challenge students to think much, only checking that they’ve done the minimum due diligence to google for CVE’s and perform basic enumeration and post-exploitation steps.

The lab instability was even worse when it came to exam time for me. It started off with the proctors constantly losing their connection to me, interrupting my exam to perform a myriad of issues that lasted for about two hours. Eventually it was resolved on their end and I proceeded to have about another hour where the vpn kept dropping over and over. For my hassle I got comped a full one hour(because one hour at the end of a 24 hour exam is DEFINITELY worth as much as losing three hours at the start of your exam /s).

From there everything was pretty basic. Some of the issues were stuff I’ve seen one to one on other boxes or even just verbatim example issues I saw in CPTS ironically. One of the privilege escalations I needed was not only in my CPTS notes but employed the exact same software to demonstrate the issue.

The newly added Active Directory sets are extremely basic as well. There has been rumors floating around that some of the new OSCP sets could be entirely solved with just crackmapexec and while I wouldn’t say that was true for my set, it was pretty close. The complexity of the AD portion doesn’t even scratch the surface elements of what CPTS covered.

I was pleasantly surprised about how much of a non concern the infamous tool restrictions were. Not once did I feel compelled to even wish I could employ one of the banned tools. They just weren’t needed. Even the one ‘free’ usage of metasploit seemed entirely unnecessary, I had forgotten I had even made it a personal goal to not use it simply because there was never a time where it would have even saved me any time.

Before starting on my report for the exam, I made sure to get a good night’s sleep and woke up early in the morning while I still had some lab time left to make absolutely sure I had all the notes I needed for the report. I went through the attack path for each box again about three times and honestly I’m very glad I did! I left about 30 points on the table because a screenshot didn’t capture a proof properly and two other proofs that I thought got submitted to the web portal but didn’t take. Easily could have gone from totally stomping the exam to nearly failing had I triple checked everything before it was too late. I’d highly recommend any takers do the same, with how strict Offsec is with proof submissions I would not be shocked if more than a few people failed just because they didn’t take the time to ensure things actually submitted properly.

The report itself is also extremely basic. The template isn’t anything to write home about and you basically just end up writing a couple mini walkthroughs for each box. While there’s often some confusion about screenshots vs terminal output for providing exploitation proof I can confirm that you can submit just terminal output and be fine in that regard. As for the proof screenshots, I kept it safe and just modeled them explicitly how the example proofs are shown in the OSCP Exam F.A.Q.

The biggest challenge in the OSCP exam is simply the time factor. Having to compromise six machines within 24 hours can be a lot, especially if you’re like me and more used to taking very slow methodical approaches to completing boxes by being very thorough. For me the biggest asset here was using Tib3rius’s Autorecon. The tool was literally written for the OSCP exam and essentially automates almost every enumeration step you would need for the exam. Being able to work on one box while enumeration finished in the background for every other box was just a massive time saver. I estimate that its usage saved me multiple hours that I would have lost if I tried to manually enumerate everything I needed to. I also saved time by having a folder of common scripts and binaries that I suspect I might need to upload to a host ready to go. You don’t want to waste time fetching new copies of standard post exploitation stuff when you can have those ready to go before the exam clock even starts. I didn’t use everything in my folder of course, but it did end up being handy multiple times.

3.0 Conclusion
--------------

This past year grinding away at CPTS and OSCP has been a wild ride. I went from being terrified of the OSCP to wondering what I was ever scared of. The truth is that as far as skills are concerned, CPTS makes OSCP look like a joke. I went through the entire PEN200 course diligently because I wanted to be able to faithfully evaluate it and give informed recommendations to others but really if it wasn’t for that it would have just been a waste of time. Aside from the early mentioned weak modules that PEN200 has that CPTS doesn’t, CPTS just does everything PEN200 does but better. The list of stuff CPTS covers that PEN200 doesn’t in turn is too large to list.

I feel pretty confident in saying that the only extra preparation I would recommend to someone seeking OSCP that has completed CPTS is just skip to the challenge labs so you can get a feel for the OSCP styled boxes and then just go for the exam. You can go for the extra credit points if you really want them, but all the standard OSCP extra prep like TJ Null’s List just isn’t necessary if you managed to complete CPTS.

Even if someone didn’t want to do the full CPTS course or had doubts about the utility of the certification itself, the AD Enumeration and Attacks module alone will all but guarantee you the 40 points for completing the OSCP AD set. I’d also just in general recommend the course for any newbies looking to get a basic foundational understanding of pentesting/hacking.

OSCP may still be the reigning king for getting interviews, but when it comes to raw skills and training it just cannot compete with CPTS.