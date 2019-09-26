# Segments #

## A Unique Take On Grids ##

Let's face it: Humans don't pay attention to grids.  So why should our website layouts?  Introducing Segments!


## We Don't Need No Stinking Grids &ndash; The Basics ##

Most pages are broken up into something more akin to portions rather than grids.  For example, take a very common layout pattern: image on the left (or right) and title with content, right next to it.  Now, normally you would break this out into, say, five columns for the image, and then seven columns for the title and content.  But that's just weird!

With segments, you simply describe the section in terms of portions.  For example, if you wanted the image to take up a third as much space as the content, you would simply use the class of "thirds". Then, the children are simply given the class of "minor" and "major", respectively.  Observe:

```
<div class="segment thirds">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

Or, you can utilize Segment's web component tags, and write it like so:

```
<segment-item class="thirds">
  <x-minor></x-minor>
  <x-major></x-major>
</segment-item>
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

```
&lt;segment-item&gt;
  &lt;x-minor&gt;&lt;/x-minor&gt;
  &lt;x-major&gt;&lt;/x-major&gt;
&lt;/segment-item&gt;
```


## It All Starts With Panels ##
