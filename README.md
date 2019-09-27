# Segments #

## A Unique Take On Grids ##

Let's face it: Humans don't pay attention to grids.  So why should our website layouts?  Introducing Segments!

## It All Starts With Panels ##

The first element that you need is called a "panel".  This is the container for your segments.  It is similar to how many libraries use a "container".  What makes it unique, though, is the fact that it facilitates some modern web design paradigms. "Huh"?  

Take for example, a webpage that has a section with a background color that extends the length of the site, but the content is obviously limited to the center &ndash; expanding only so far.  Or what about paralax? Both of these are easily accomplished with panels.  Panels are made up of two components: A wrapper and then the panel itself. Check it out:

```
<div class="panel-wrapper">
  <div class="panel">
  </div>
</div>
```

Or, you can utilize Segment's web component tags, and write it like so:

```
<panel-wrapper>
  <panel-inner>
  </panel-inner>
</panel-wrapper>
```

Then from there, the rest of your segments go inside the panel class.


## We Don't Need No Stinking Grids &ndash; Introducing Segments! ##

Most pages are broken up into something more akin to portions rather than grids.  For example, take a very common layout pattern: image on the left (or right) and title with content, right next to it.  Now, normally you would break this out into, say, five columns for the image, and then seven columns for the title and content.  But that's just weird!

With segments, you simply describe the section in terms of portions.  For example, if you wanted the image to take up a third as much space as the content, you would simply use the class of "thirds". Then, the children are simply given the class of "minor" and "major", respectively.  Observe:

```
<div class="segment thirds">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

Web components style:

```
<segment-elem class="thirds">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-elem>
```

From there, you may decide that you would rather give the image more space, maybe making the image portion 2/5 that of the content.  For this, your class would be "fifths".  The next down is "sevenths".  Sevenths is very close to the golden ratio, FYI.  Below is a diagram of the three classes (thirds, fifths, sevenths):

Oh, but I hear you saying to yourself, "But what about just plain ol' columns?!"  Ease up thunder, I gotcha covered.  In addition to thirds, fifths, and sevenths, there is "half", "fourths", and "sixths".  Any of the classes can be broken down into equal columns by using "cells" instead of "major/minor" as the children, like so:

```
<div class="segment thirds">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```

So, if you were paying attention, that give you up to seven columns across.  If you need more, well, you will have to build your own.  Instructions on making that super-duper easy coming soon!

## "But What About Breakpoints, Gah?!" ##

Not a problem.  Segments provides the following breakpoints:

- Full size (default)
- Large (lg)
- Medium (md)
- Tablet (tablet)
- Small (sm)
- Extra Small (xs)

And here's how you use them:

```
<div class="segment thirds tablet-stack">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>

<div class="segment fifths lg-thirds md-half tablet-stack">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

Web components style:

```
<segment-elem class="thirds tablet-stack">
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
</segment-elem>

<segment-elem class="fifths lg-thirds md-half tablet-stack">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-elem>
```
