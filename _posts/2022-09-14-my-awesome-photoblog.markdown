---
layout: post
title: "My Awesome Photoblog"
date: 2022-09-14 21:33:08 +0200
tags: [web, sql-injection, RCE, privilege-escalation]
---
We started the ZIUR classroom with our first meeting on June 22nd. The objective of this seminar was to learn some **techniques of web exploitation and post-exploitation privilege escalation**, in particular:
- Web fuzzing
- SQL inyections
- Remote command executions and reverse shell
- Privleg
- Escalación de privilegios en Linux

To do so, we took on My Awesome Photoblog, a general-purpose blog where users work with security measures that leave much to be desired. We then discovered how **an incorrect treatment of URL parameters can lead us to become *root* users of the server where the web page is hosted**.

{:refdef: style="text-align: center;"}
![My Awesome Photoblog site](/assets/img/posts/myAwesomePhotoblog.png){: width="700"}
{:refdef}

From [here](https://docs.google.com/document/d/1i8jwir6FyGaZXFy0gh6LV2JA108AL695aNFTY_FAl84/edit) you can access the tools used for the seminar, as well as a series of videos where Juanan explains step by step the solution. You also have available the [writeup][1] of the machine, with some additions (such as cracking the administrator password and explanations of some topics to go into more detail) and focused from the Kali distribution instead of Windows.

After *pwning* the machine, we concluded the seminar with the proposal of some exercises to work on our own, in which we included:
1. Automating the SQL Injection process using the *sqlmap* tool.
2. Embedding php code inside an image.
3. Fixing security bugs:
    - Filter URL parameters correctly.
    - Prevent the server from issuing debug information on errors.
    - Avoid web fuzzing by installing fail2ban.

This was the first and last seminar of the 2021-2022 course, a bit introductory but at the same time a good way to open the doors to the world of web pentesting. We are looking forward to next year, where we will learn many more techniques to get started in malware analysis, reversing, cryptography... but not only that, we will also have talks from high caliber guests!

[1]:{{ site.url }}/downloads/23-06-2022-MyAwesomePhotoblog.pdf