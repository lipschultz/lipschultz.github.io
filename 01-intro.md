# Numbers on Numberphile

[Numberphile](https://www.youtube.com/user/numberphile/) is a YouTube channel that's "[Videos about numbers - it's that simple.](https://www.youtube.com/user/numberphile/about)".  It's perhaps the most popular Youtube channel devoted to math, with over two million subscribers and 300 million views as of December 14, 2017.  One frequent contributor to Numberphile is Matt Parker, who has his own YouTube channel, [standupmaths](https://www.youtube.com/user/standupmaths/), where he does "[mathematics and stand-up. Sometimes simultaneously. Occasionally while being filmed. (It's quite the Venn diagram.)](https://www.youtube.com/user/standupmaths/about)"  In this series, we'll explore how often various numbers are featured on these two channels, whether some numbers are more popular than others, and generally have fun with numbers.

## History

This project actually began as a disco calculator for a friend's daughter, inspired by [Sam's Disco Calculator](https://www.youtube.com/watch?v=YfIQ7ktFM1g).  For each calculation, the calculator would show a fact related to the calculation or result.  I collected these facts from Numberphile and standupmaths videos.  Eventually, I realized that I have a bunch of data, it'd be ashame if I didn't explore the data (I may also have been inspired by [Sloane's Gap](https://www.youtube.com/watch?v=_YysNM2JoFo).)

## About the Data

Only videos on Numberphile and standupmaths are included in the data.  Hidden videos on those channels that are linked to from a visible video on those channels are included.  Other hidden videos, and private videos, are not included.  [Numberphile2](https://www.youtube.com/user/numberphile2/) and [Matt Parker](https://www.youtube.com/user/MattParker/) are not included.  The analysis includes videos up to December 12, 2017, giving a total of 359 Numberphile videos and 98 standupmaths videos.  There are many other math channels on YouTube, but the data collection and analysis are left as exercises to the reader.

### Annotations

For each video, the following information was recorded:
- URL
- Title
- Hosts - people talking about the math/number(s) in the video, but not necessarily everyone involved in making or appearing in the video (e.g. the hosts for [MENACE: the pile of matchboxes which can learn](https://www.youtube.com/watch?v=R9c-_neaxeU) are just Matt Parker, Matthew Scroggs, and Katie Steckles)
- Date published
- Source ("Numberphile", "standupmaths")
- links to any relevant [Online Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/) or [Wikipedia](https://en.wikipedia.org/) page
- Test - used to determine what numbers or calculations occur in the video

Test is what we'll use to determine whether a number is "featured" in a video.  The test is a python function that takes a formula, its result, and the context (i.e. calculation history), and returns True if the formula, result, or context are relevant to the video.  I chose to use a function instead of recording the set of numbers (as is done in OEIS) since some sets would be very large (e.g. set of all integers from [Sloane's Gap](https://www.youtube.com/watch?v=_YysNM2JoFo)).

This analysis suffers from having only one annotator: me.  I have probably been inconsistent in my annotations over the months I spent watching and annotating videos, and the threshold for a number to "feature" in a video is very vague.  In my defense, the data was originally intended to supplement a child's disco calculator, so I didn't approach this with the rigor I maybe should have.  Therefore, I welcome annotations from others to establish inter-rater reliability and improve the overall tags.

Some guidelines I used for determining whether a number was "featured" in the video:

- If the video is about random numbers or randomness (e.g. [An unexpected way to inflate a balloon](https://www.youtube.com/watch?v=un-pTKfC1dQ)), then the video will match a random number in the range [0, 1).
- When a constant is calculated and the error is mentioned (e.g. [computing pi using pies](https://www.youtube.com/watch?v=ZNiRzZ66YN0)), any number within that error range of the constant is considered "featured" in the video.
- Numbers that show up in illustrative examples do not qualify as being featured in the video
    - e.g. [a video about parabolas](https://www.youtube.com/watch?v=zXoJlRFbktw) will use some numbers as coefficients and x or y values, but those numbers aren't "featured" in the video
    - e.g. the [triplets in Apéry's constant](https://www.youtube.com/watch?v=ur-iLy4z3QE)
- Some videos just aren't obviously about numbers (Todashi's Toys are a good example), so these videos don't match any numbers.
- If a set is talked about (e.g. prime numbers or Fibonnacci sequence) but only some numbers from the sequence are included, "all" numbers in the set are considered featured in the video (well, all numbers up to the max I'm considering in this analysis or up to what's included in OEIS or Wikipedia).
    - If a video is about numbers in general (e.g. [Philosophy of Numbers](https://www.youtube.com/watch?v=vA2cdHLKYB8)), then it features all numbers.
    - If a video is about a kind of number (e.g. [Surreal Numbers (writing the first book)](https://www.youtube.com/watch?v=mPn2AdMH7UQ)), then all numbers of that kind are featured.

### Counting Featured Numbers

For the analysis in this project, we're only interested in whether a number is "featured" in the video, so we feed that number in as the `result` to the test function; the `formula` that generated that result will also be the number; no additional calculation history is provided.  If the test function returns True, then the number is featured in the video.

While studying the popularity of all numbers would be interesting, time and space constraints limit the set of numbers to consider.   Drawing from previous work on the popularity of integers in OEIS (see [Sloane's Gap](https://www.youtube.com/watch?v=_YysNM2JoFo)), bounds were set at -10000 to +10000 for both real and imaginary numbers.  Along the real axis (a + 0i) and the imaginary axis (0 + bi), we take 0.01-step increments.  For all other complex numbers (a + bi, for a, b != 0), we take unit steps for both a and b.

## A Brief Word About OEIS

While the goal of this analysis is to examine the popularity of numbers in Numberphile and standupmaths, I will at times make reference or comparison to the [Online Encyclopedia of Integer Sequences (OEIS)](http://oeis.org/), so a brief introduction is in order.  The OEIS is exactly what it claims to be: an encyclopedia of integer sequences.  No non-integer values occur in the sequences (although sequences can be about non-integer numbers), nor are there sequences containing imaginary numbers (although sequences can be about imaginary numbers).

The data used in this analysis was downloaded on December 15, 2017 and consists of 296522 sequences.  Unlike the data on the videos, OEIS records a list of numbers in the sequence and caps it at about 500 characters in a sequence.  While generating functions in various programming languages are sometimes available, they are not used in this analysis.  Unfortunately, this has the effect of numbers occurring in a sequence, but not being included in OEIS's rendering of the sequence and therefore not being included in this analysis.
