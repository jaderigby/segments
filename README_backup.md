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

Here's a list of the web component tags available to you:





"So what are segments," you ask?  I'm glad you asked!  A segment is a way of breaking a design down into familiar portions, rather than following some crazy grid.  For example, let's say you have an image on the left with a title and text on the right, a very common layout pattern.  Usually the image is given a percentage of the space smaller than the text is, such as 1/3 for the image to 2/3 for the text side.  Segments allows you to do just that: You describe the space in terms of "thirds", and it does the rest.  In fact, as you decrease screen width, it adapts quite nicely: There is no fixed widths.  It's all about portions, baby!



Converted to segments, this would be:

![](/image-figures/layout-example-with-tiles-0.0.5.svg)

If we were to look at the same example with a 12-grid layout, it would looks something like:

![](/image-figures/layout-example-12grid-0.0.5.svg)

You can see how with a grid system we would have to make some compromises or write some additional css in order to accommodate the design.

With segments, it's quite easy.  Not only that, but it scales quite elegantly as the screen width shrinks, because it is percentages and not following 12 sections of a grid.

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

From there, you may decide that you would rather give the image more space, maybe making the image portion 2/5 that of the content.  For this, your class would be "fifths".  The next down is "sevenths".  Fifths is the closest to the golden ratio, FYI.  Below is a diagram of the three classes (thirds, fifths, sevenths):

![](/image-figures/segment_diagram-comparison-0.0.4.svg)

You will notice that fifths and sevenths are slightly off.  This is for two reasons:

1. To balance the steps from thirds, to fifths, to sevenths.
2. This allows fifths to set squarly on the golden ratio.

If you would like to keep fifths and sevenths as true portions, say, for example so that columns and portions line up, simply add the class of "true" with the "fifths" or "sevenths" class.  For example:

![](/image-figures/segment_diagram-true-fifths.svg)

And here's how true elements compare:

![](/image-figures/segment_diagram-true_comparison-0.0.7.svg)

## I Need Columns, Brah! ##

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

## Prime Time! ##

Now, what if your layout doesn't quite fit a "thirds", "fifths", or "sevenths" layout? A common occurrence such as this could be for a forum or comments layout, where you have a small avatar on the left and content on the right.  Not a problem!  You can use something called "prime segments".  Observe:

```
<div class="prime-segment">
  <div class="minor">
    <img src="avatar" />
  </div>
  <div class="major">
    <p>Some example content</p>
  </div>
</div>
```

Web components style:

```
<prime-segment>
  <x-minor>
    <img src="avatar" />
  </x-minor>
  <x-major>
    <p>Some example content</p>
  </x-major>
</prime-segment>
```

Prime segments, like any other, inherit the default 15px gutter between the two elements. If more is needed, simply declare a new rule and add additional margin or padding to either the minor or major element. For example:

```
.prime-segment > .minor,
prime-segment > x-minor {
  margin-right: 30px;
}

...

<div class="prime-segment">
  <div class="minor">
    <img src="avatar" />
  </div>
  <div class="major">
    <p>Some example content</p>
  </div>
</div>
```

## Web Components ##

Here's a full list of web components:

- panel-wrapper
- panel-inner
- segment-elem
- x-minor
- x-major
- x-cell
- prime-segment

All of these act like divs with no special sauce, really.  Except for `panel-inner` which has an optional "whitespace" attribute.  This has been added to facilitate on-the-fly reassigning of the default whitespace which panels provide:

```
<panel-wrapper>
  <panel-inner whitespace="20">
  </panel-inner>
</panel-wrapper>
```

If you would like to change the whitespace value (top and bottom padding) of ALL panels, you may do so by changing the value in the `segments.styl` file located in the `stylus` folder.  Then, run the command `grunt create` (this, of course, is assuming that you have installed the Grunt CLI, NodeJS, and have run `npm install` already).
