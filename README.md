# Segments #

## A Unique Take On Grids ##

Let's face it &ndash; humans don't pay attention to grids.  So why should our website layouts?  Introducing Segments!

When we look at a site, we don't typically think "Hey, nice grid!"  We look at the relationship between images and text, the visual groupings which help us make sense of the content.  In fact, if a site is laid out with too pronounced a grid, it can be distracting and stiff.  As humans, we care more about design harmony than following some stale and contrived 12-column grid layout system.

Take the following example:

![](/image-figures/layout-example-0.0.4.svg)

This is a common layout motif for sites.  We have an icon, graph or image on one side, in the smaller &ndash; or "minor" &ndash; portion.  And then the title and content, maybe even a button, in the larger &ndash; or "major" &ndash; portion.  

Ok, so let's try that with a 12-column grid:

![](/image-figures/layout-example-12grid-0.0.5.svg)

You can see how we would need to decide what to do with the gap on the right, for the image.  Maybe we extend it larger to fit the space.  Or maybe we write more rules to override the default size, spacing, and etc.  Also, the text on the right would have to be modified, as well, as it is 5px off.

Now let's try it with segments:

![](/image-figures/layout-example-with-tiles-0.0.5.svg)

Much better!  With segments, layout is designed more how humans think of layout:

- a minor section, such as 1/3 of the size
- a major section, such as 2/3 of the size

This isn't to say that you don't have some compromises with segments, as well.  What you DO get is a system that is intented to provide pleasant design relationships right from the start, rather than attempting to match "the grid".  These relationships of major/minor help you get work done, rather than pin you down.

To emphasize the point further, referring back to the original layout above, this follows a portion 0f fifths that matches the golden ratio of design.

## We Don't Need No Stinking Grids &ndash; Let's Use Segments! ##

Segments come in four flavors: half (1/2, 1/2), thirds (1/3, 2/3), fifths or "Golden Ratio" (2/5, 3/5), and sevenths (3/7, 4/7).  See below:

![](/image-figures/segment_diagram-comparison-0.0.4.svg)

These can be written like so:

```
<div class="segment thirds">

</div>
```

This is the first element. It contains the "segment" class to get us started.  Then, "thirds" to declare which of the three flavors we are going to use.  Easy peazy!

Then from there, we simply declare the two children classes:

```
<div class="segment thirds">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

The "minor" class is, of course, the small container, and the "major" class is the large one.  So for "thirds", the "minor" container is 1/3 the total size, and the "major" one is 2/3 the total size.  Note that the default gutter is a static 15px, and is figured into these equations.

What's great about this is that when you decide to adjust the portions, say from "thirds" to "fifths", you only have to change one value, and not two like you do with a grid systems. For example:

```
<div class="segment thirds">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

... becomes:

```
<div class="segment fifths">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

To accomplish something similar with a popular grid-based system, you would have to do something like:

```
<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-8"></div>
</div>
```

... becomes:

```
<div class="row">
  <div class="col-md-5"></div>
  <div class="col-md-7"></div>
</div>
```

With segments, it's the parent wrapper that does all the work.  The children don't have to do anything but be children. Neat!

Not only that, but you usually need another wrapper in order to control the proper left and right margins to start:

```
<div class="container">
  <div class="row">
    <div class="col-md-5"></div>
    <div class="col-md-7"></div>
  </div>
</div>
```

Later on, you will be introduced to a Segments wrapper called "panels", but they serve a different purpose and are a feature, not a requirement.

## Web Components ##

To make segments even awesomer, yes "awesomer", a web component library has been included.  These web component elements can be written like so:

```
<segment-elem class="thirds">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-elem>
```

If you notice, we drop the "segment" class in favor of a named tag, and just declare the "thirds" part.  Then, since this is web components, the children have their own tags, as well.  (Note: The reason each element has a beginning and an ending name portion (such as the "x" on "minor" and "major") seperated by a hyphen is because of the way that the web component spec was written.  Just know that it is on purpose.)

Here's a list of the web component tags available to you:

- panel-wrapper
- panel-inner
- segment-elem
- x-minor
- x-major
- x-cell
- prime-segment

### Add Web Components To Your Project ###

To add the Segments web components library to your project, first add the css library found in this repo's css folder:

```
wc-segments.lib.min.css
```

And then add the js library to the head of your webpage, found in this repo's js folder:

```
segments.lib.js
```

And you're set!

## Panels, Baby! ##

Another feature to the Segments library comes in the form of "Panels".  "What are panels," you ask?  Glad you asked!  Panels are a way to provide some whitespace between sections.  But they serve a much bigger purpose, as well:  They are the building blocks for a webpage, and they are stackable!  

Take the following:

```
<html>
  <head></head>
  <body>

  </body>
</html>
```

Usually, a webpage will have a div to act as a container or "wrapper", such as:

```
<html>
  <head></head>
  <body>
    <div id="container">

    </div>
  </body>
</html>
```

Using segments, this would look like:

```
<html>
  <head></head>
  <body>
    <div class="panel-wrapper">
      <div class="panel">

      </div>
    </div>
  </body>
</html>
```

With Web Components:

```
<html>
  <head></head>
  <body>
    <panel-wrapper>
      <panel-inner>

      </panel-inner>
    </panel-wrapper>
  </body>
</html>
```

You will notice that panels have two parts:

1. a wrapper
2. the panel, itself

"So what's so great about this," you ask?  Well first off, panels default to a width of 1200px, and are centered (Later, when we get into breakpoints, we'll talk about the importance of this value more).

Next, because of this wrapper/panel relationship, a background color can be added to the wrapper and viola!  You can extend a colored section all the way across.  This can be very useful for other benefits, such as background images or paralax images, as well.

You can use just one panel to wrap your entire site if it suits you, or you can stack them on top of each other as you go, such as:

```
<html>
  <head></head>
  <body>
    <div id="hero" class="panel-wrapper">
      <div class="panel">

      </div>
    </div>
    <div id="tagline" class="panel-wrapper">
      <div class="panel">

      </div>
    </div>
    <div id="productShowcase" class="panel-wrapper">
      <div class="panel">

      </div>
    </div>
  </body>
</html>
```

With Web Components:

```
<html>
  <head></head>
  <body>
    <panel-wrapper id="hero">
      <panel-inner>

      </panel-inner>
    </panel-wrapper>
    <panel-wrapper id="tagline">
      <panel-inner>

      </panel-inner>
    </panel-wrapper>
    <panel-wrapper id="productShowcase">
      <panel-inner>

      </panel-inner>
    </panel-wrapper>
  </body>
</html>
```

Panels add some whitespace, as well, in the form of top and bottom margins. The default is 60px.

## "I Needs Me Some Breakpoints, Brah!" ##

Remember how I told you that the parent element does all the work?  This becomes even more elegant when breakpoints are introduced.  Segments provides the following breakpoints:

- Full size, or "default"
- Large (lg)
- Medium (md)
- Tablet (tablet)
- Small (sm)
- Extra Small (xs)

And here's how you use them:

```
<div class="segment thirds lg-fifths tablet-stack">
  <div class="minor"></div>
  <div class="major"></div>
</div>

<div class="segment fifths lg-thirds md-half tablet-stack">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

Web components style:

```
<segment-elem class="thirds lg-fifths tablet-stack">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-elem>

<segment-elem class="fifths lg-thirds md-half tablet-stack">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-elem>
```

The default, or full size, is 1200px &ndash; but it can be changed in the "segments.styl" file, contained within this repo's "stylus" folder, if needed.

The default size refers to the first values: "thirds", "fifths", and "sevenths".  Then, simply add the prefix for each respective size below:

- thirds
- lg-thirds
- md-thirds
- tablet-thirds
- sm-thirds
- xs-thirds

To bring a minor/major to full width, use "stack".

- lg-stack
- md-stack
- tablet-stack
- sm-stack
- xs-stack

## Wait A Minute, What About Columns?! ##

Columns are easy with Segments!  Just replace "minor" and "major" with "cell", making sure that the count of "cells" is accurate.

### Three Columns ###

```
<div class="segment thirds">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```

With Web Components:

```
<segment-elem class="thirds">
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
</segment-elem>

```

### Five Columns ###

```
<div class="segment fifths">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```

With Web Components:

```
<segment-elem class="fifths">
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
</segment-elem>
```

### It Goes Up To Seven ###

Segments supports up to seven columns total:

- Half
- Thirds
- Fourths
- Fifths
- Sixths
- sevenths

If you need more, you can refer to the Segments file "stylus/segments.styl", follow the pattern and extend it.  Refer to end of the readme for instructions on how to compile.

## Custom Whitespace ##

The panel web component includes "whitespace" attribute.  This allows you to adjust a panel's whitespace inline.  This can be beneficial when certain panels needed adjusted when doing a stacked layout. For example:

```
<panel-wrapper id="hero">
  <panel-inner>

  </panel-inner>
</panel-wrapper>
<panel-wrapper id="tagline">
  <panel-inner whitespace="35">

  </panel-inner>
</panel-wrapper>

...

```

Under normal circumstances, mixing style with markup should be avoided.  But due to the nature of panels &ndash; especially acting as a divider or section grouper &ndash; it makes sense.  Whichever way you prefer, classes-only or the whitespace attribute, just stay consistent with all your panels.  Personally, I find the convenience of the whitespace feature beneficial, but choose whichever one works best for you.

## Prime Segments ##

What happens when standard segments don't quite fit?  A "prime" example would be a comment section or a message thread in a forum.  Something like this:

![](/image-figures/forum-example.svg)

Then you can use something called a "prime segment".  A prime segment has the left/right relationship of regular segments with the standard gutter applied.  But the minor/major relationship is driven by whatever's in the minor wrapper as a static size.  For example, if you have an avatar image that is 45px in width, then the major container will be the full length of the parent container, minus 45px and the gutter width. Like this:

![](/image-figures/forum-example-with-tiles.svg)

And here's how to use them:

```
<div class="prime-segment">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

With Web Components:

```
<prime-segment>
  <x-minor></x-minor>
  <x-major></x-major>
</prime-segment>

### Changing Default Values ###

Instructions on how to change default values is coming soon.  In the meantime, if you've worked with Grunt and NodeJS, then you can check out the projects Grunt file for configuration and commands, and then all the default values are found at the top of the "stylus/segments.styl" file.  Once you make your change, you can run `grunt create` to compile.
