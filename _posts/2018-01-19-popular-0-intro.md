---
layout: popular_numbers_post
title: "Popular Numbers, Part 0: Introduction"
category: popular numbers
tags:
    - data science
    - youtube
    - Numberphile
    - standupmaths
    - OEIS
primary_image: "/images/diabicus-discoing.gif"
snippet: "While all numbers are interesting, prior research reveals not all numbers are popular.  This prior research was on the Online Encyclopedia of Integer Sequences, but is this true for other online math resources?  Is popularity a function of the resource or is it a social construct independent of resource?  In this series, I'll try to answer these questions by looking at the popularity of numbers across a few online math resources."
---

While [all numbers are interesting](https://en.wikipedia.org/wiki/Interesting_number_paradox), it seems not all numbers are popular ([Guglielmetti, 2009](https://www.drgoulu.com/2009/04/18/nombres-mineralises/); [Gauvrit, Delahaye, Zenil, 2011](https://arxiv.org/abs/1101.4470)).  This prior research was on the [Online Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/), but is this true for other online math resources?  Is popularity a function of the resource or is it a social construct independent of resource?  In this series, I'll try to answer these questions by looking at the popularity of numbers across a few online math resources.

## History

![Diabicus: The Disco Calculator](/images/diabicus-discoing.gif)

Confession: This project actually began as [a disco calculator for a friend's daughter](https://github.com/lipschultz/diabicus) (or, a noisy torture device for the friend -- it's a matter of perspective).  I was inspired by [Sam's Disco Calculator](https://www.youtube.com/watch?v=YfIQ7ktFM1g) from the [standupmaths YouTube channel](https://www.youtube.com/user/standupmaths/).  For each calculation, the calculator would show a fact related to the calculation or result.  I collected these facts from two of my favorite math channels on YouTube: standupmaths and [Numberphile](https://www.youtube.com/user/numberphile/), since they served as the inspiration for the disco calculator (see the [Calculator Unboxing playlist](https://www.youtube.com/playlist?list=PLt5AfwLFPxWKAINNfxIdYmFVKuk_F_cQq)).  Eventually, I realized that I have a bunch of data and it'd be ashame if I didn't explore it.

## About the YouTube Data

Because the disco calculator only included facts from Numberphile and standupmaths, the YouTube data I'll be analyzing only includes those channels.  For simplicity, private and hidden videos aren't included (unless there's an obvious link in a public video).  The analysis includes videos up to December 12, 2017, giving a total of 359 Numberphile videos and 98 standupmaths videos.  There are many other math channels on YouTube, but the data collection and analysis are left as exercises to the reader.

The data used in this analysis can be found: [https://github.com/lipschultz/diabicus/blob/d1b1bb2020c6b6ad8e446dbc7d719efc6155a3c5/resources/youtube.json](https://github.com/lipschultz/diabicus/blob/d1b1bb2020c6b6ad8e446dbc7d719efc6155a3c5/resources/youtube.json)

### Annotations

For each video, I recorded the following information:

- `link` to YouTube video
- `title` of the video
- `host` (or hosts) talking about the math/number(s) in the video, but not necessarily everyone involved in making or appearing in the video (e.g. the hosts for [MENACE: the pile of matchboxes which can learn](https://www.youtube.com/watch?v=R9c-_neaxeU) are just Matt Parker, Matthew Scroggs, and Katie Steckles)
- `date` published
- `source` ("Numberphile", "standupmaths")
- links to any relevant [Online Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/) or [Wikipedia](https://en.wikipedia.org/) page
- A `test` to determine what numbers or calculations are featured in the video. It's a python function that takes a formula, its result, and the context (i.e. calculation history), and returns `True` if the formula, result, or context are relevant to the video.  I chose to use a function instead of recording the set of numbers (as is done in OEIS) since some sets would be very large (e.g. set of all integers).

This analysis suffers from having only one annotator: me.  I have probably been inconsistent in my annotations over the months I watched and annotated videos, and the threshold for a number to "feature" in a video is very vague.  In my defense, I didn't have the foresight to realize I'd be using the data to study number popularity.  I hope you can forgive me for not approaching the data collection with the rigor that data analysis (or a child's toy) truly deserves.

Some guidelines I used for determining whether a number was "featured" in the video:

- If the video is about random numbers or randomness (e.g. [An unexpected way to inflate a balloon](https://www.youtube.com/watch?v=un-pTKfC1dQ)), then the video will match a random number in the range [0, 1) unless a different range is more appropriate.
- When a constant is calculated and the error is mentioned (e.g. [computing pi using pies](https://www.youtube.com/watch?v=ZNiRzZ66YN0)), any number within that error range of the constant is considered "featured" in the video.
- Numbers that show up in illustrative examples do not qualify as being featured in the video
    - e.g. [a video about parabolas](https://www.youtube.com/watch?v=zXoJlRFbktw) will use some numbers as coefficients and x or y values, but those numbers aren't "featured" in the video
    - e.g. the [triplets in Apéry's constant](https://www.youtube.com/watch?v=ur-iLy4z3QE)
- Some videos just aren't obviously about numbers (most of [Tadashi's Toys](https://www.youtube.com/playlist?list=PLt5AfwLFPxWI9eDSJREzp1wvOJsjt23H_) are a good example), so these videos don't match any numbers.
- If a set is talked about (e.g. prime numbers or Fibonnacci sequence) but only some numbers from the sequence are included, "all" numbers in the set are considered featured in the video (well, all numbers up to the max I'm considering in this analysis or up to what's included in OEIS or Wikipedia).
    - If a video is about numbers in general (e.g. [Philosophy of Numbers](https://www.youtube.com/watch?v=vA2cdHLKYB8)), then it features all numbers.
    - If a video is about a kind of number (e.g. [Surreal Numbers (writing the first book)](https://www.youtube.com/watch?v=mPn2AdMH7UQ)), then all numbers of that kind are featured.

I welcome annotations from others to establish inter-rater reliability and improve the overall analysis.

The code for determining whether a number is featured in a video can be found here: [https://github.com/lipschultz/diabicus/blob/gap-analysis/number-analysis/compute_popularity.py](https://github.com/lipschultz/diabicus/blob/gap-analysis/number-analysis/compute_popularity.py)

## About the OEIS Data

The [Online Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/) is exactly what it claims to be: an online encyclopedia of integer sequences.  No non-integer values occur in the sequences (although sequences can be about non-integer numbers, e.g. [A000796](http://oeis.org/A000796)), nor are there sequences containing imaginary numbers (although sequences can be about imaginary numbers, e.g. [A002410](http://oeis.org/A002410)).

I downloaded the OEIS data on December 15, 2017; it consists of 296 522 sequences ([download link](http://oeis.org/stripped.gz)).  Unlike the data on the videos, OEIS records a list of numbers in the sequence and [generally caps it at about 180 to 210 characters in a sequence (including commas)](http://oeis.org/FAQ.html#Z07b) (On a side note, [thanks to recent changes at Twitter](https://blog.twitter.com/official/en_us/topics/product/2017/tweetingmadeeasier.html), you can now tweet your favorite OEIS sequence in full #tweetOEIS.).  While generating functions in various programming languages are sometimes available, they are not used in this analysis.  Unfortunately, this has the effect of numbers occurring in a sequence, but not being included in OEIS's rendering of the sequence and therefore not being included in this analysis.

[Guglielmetti, 2009](https://www.drgoulu.com/2009/04/18/nombres-mineralises/) and [Gauvrit, Delahaye, Zenil, 2011](https://arxiv.org/abs/1101.4470) also looked at the popularity of numbers in OEIS, but counted numbers differently.  They counted the total number of occurrences of a number in OEIS.  So if a number occurred more than once in a sequence, it was counted each time.  However, in this series of posts, to be consistent with how I counted numbers in the YouTube videos, I instead count the sequences a number occurs in.  For example, in sequence [A000796](http://oeis.org/A000796) (the digits of Pi), the number `1` occurs nine times.  In prior work, the `1`'s count would increase by nine, while in this analysis it increases by one.

Code for adding the OEIS data to the database of feature numbers can be found here: [https://github.com/lipschultz/diabicus/blob/gap-analysis/number-analysis/compute_oeis_popularity.py](https://github.com/lipschultz/diabicus/blob/gap-analysis/number-analysis/compute_oeis_popularity.py)

## Counting Numbers

While studying the popularity of all numbers would be interesting, time and space constraints limit the set of numbers to consider.   Drawing from previous work on the popularity of integers in OEIS (see [Sloane's Gap](https://www.youtube.com/watch?v=_YysNM2JoFo)), bounds were set at [-10000, +10001) for both real and imaginary numbers.  Along the real axis (a + 0i) and the imaginary axis (0 + bi), I take 0.01-step increments.  For all other complex numbers (a + bi, for a, b != 0), I take unit steps for both a and b.

## Featured Figures and Future Figuring

Important numbers for today's post:

- 359 Numberphile videos annotated
- 98 standupmaths videos annotated
- 1 annotator for videos
- 296 522 OEIS sequences included

With the introduction and overview out of the way, next time I'll take a look at the data and attempt to replicate the prior findings on OEIS.

