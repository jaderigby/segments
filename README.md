# Segments #

## A Unique Take On Grids ##

Let's face it &ndash; humans don't pay attention to grids.  So why should our website layouts?  Introducing Segments!

When we look at a site, we don't typically think "Hey, nice grid!"  We look at the relationship between images and text, the visual groupings which help us make sense of the content.  In fact, if a site is laid out with too pronounced a grid, it can be distracting and stiff.  As humans, we care more about design harmony than following some stale or contrived 12-column grid system.

Take the following example:

![](/image-figures/layout-example-0.0.4.svg)

This is a common layout motif for sites.  We have an image on one side, in a small "minor" portion.  And then some content &ndash; maybe a title, some text, perhaps a button, in a larger "major" portion.  

Ok, so let's try that with a 12-column grid:

![](/image-figures/layout-example-12grid-0.0.5.svg)

You can see how we would need to decide what to do with the gap on the right, for the image.  Maybe we extend it larger to fit the space.  Or maybe we write more rules to override the default size, spacing, and etc.  Also, the text on the right would have to be modified, as well, as it is nearly 5px off.

Now let's try it with segments:

![](/image-figures/layout-example-with-tiles-0.0.5.svg)

Much better!  With segments, layout is designed more how humans think:

- a minor section, such as 1/3
- a major section, such as 2/3

This isn't to say that you don't have some compromises with segments, as well.  But what you DO get is a system that provides pleasant design relationships right out the gate, rather than rigidly attempting to match "the grid".  These relationships of major/minor help you get work done, instead of pinning you down and locking you in.

Stated in other terms, the example above is using a portion of fifths &ndash; which is a match for the golden ratio of design!  Try _that_ with a grid!

## We Don't Need No Stinking Grids &ndash; Let's Use Segments! ##

Segments come in four flavors: __half__ (1/2, 1/2), __thirds__ (1/3, 2/3), __fifths__ (2/5, 3/5), and __sevenths__ (3/7, 4/7).  See below:

![](/image-figures/segment_diagram-comparison-0.0.4.svg)

These can be written like so:

```
<div class="segment thirds">

</div>
```

This is the first element. It contains the "segment" class to get us started.  Then, "thirds" to declare which of the four segment flavors we are going to use.  Easy peazy!

The only thing left to do is add the children:

```
<div class="segment thirds">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

The "minor" class is, of course, the small container, and the "major" class is the large one.  So for "thirds", the "minor" container is 1/3 the total size, and the "major" container is 2/3 the total size.  Note that the default gutter is a static 15px, and is figured into this.

What's great about this is that when you decide to adjust the portions, say from "thirds" to "fifths", you only have to change one value, and not two like you do with popular grid-based systems. For example:

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

To accomplish something similar with a grid-based system, if you had something like:

```
<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-8"></div>
</div>
```

... which would then become becomes:

```
<div class="row">
  <div class="col-md-5"></div>
  <div class="col-md-7"></div>
</div>
```

With Segments, it's the parent wrapper that does all the work.  The children don't have to do anything but be children.

Neato!

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

To make Segments even awesomer, yes "awesomer", a web component library has been included.  These web component elements can be written like so:

```
<x-seg class="thirds">
  <x-minor></x-minor>
  <x-major></x-major>
</x-seg>
```

If you notice, we drop the "segment" class in favor of a named tag, and just declare the "thirds" class.  Then, the children have their own tags, as well.  

(_Note: The reason each element has a beginning and an ending name portion (such as the "x" on "minor" and "major") separated by a hyphen is because of the way that the web component spec was written.  Just know that it is on purpose._)

Here's a list of the available web component tags:

- panel-wrapper
- panel-inner
- x-seg
- x-minor
- x-major
- x-cell
- prime-seg (more on prime segments within the "Prime Segments" section: They're cool!)

### UPDATE: ##

The `x-seg` component has a new feature: You can now add the attribute "of" to it, and pass in a numerical value.  This will tell it which class to apply, such as using the number "3" to apply the class of "thirds".
```
<x-seg of="3">
```

The above results in a tag of `<x-seg class="thirds">`.  And for responsive:

```
<x-seg of="3" class="md-stack">
```

The above creates a tag that defaults to "thirds" for anything above "medium" screen sizes, and from medium down stacks them.

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

## Wait A Minute, What About Columns?! ##

Columns are easy with Segments, too!  Just replace the "minor" and "major" children with "cell" children. Just make sure that you have the right number of children, such as three for "thirds", five for "fifths", and so on.

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
<x-seg class="thirds">
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
</x-seg>

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
<x-seg class="fifths">
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
  <x-cell></x-cell>
</x-seg>
```

### It Goes Up To Seven ###

The Segments Library supports up to seven columns total:

- Half
- Thirds
- Fourths
- Fifths
- Sixths
- Sevenths

You'll notice that "fourths" and "sixths" have been added to round things out.  If you need more, you can refer to the Segments file "stylus/segments.styl", follow the pattern and extend it.  Refer to end of the readme for instructions on how to compile.

## Panels, Baby! ##

Another feature of the Segments library comes in the form of "Panels".  

"What are panels," you ask?  Glad you asked!  

Panels are a way to provide some whitespace between sections.  But they serve a much bigger purpose, as well:  They are the building blocks for a webpage, and they are stackable!  

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
      <div class="panel-inner">

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

Next, because of this wrapper/panel relationship, a background color can be added to the wrapper and viola!  You can extend a colored section all the way across.  This can be very useful for other benefits, such as background images or parallax effects, as well.

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

Panels add some whitespace, as well, in the form of top and bottom margins. The default space is 60px.

## Prime Segments ##

What happens when standard segments don't quite fit?  A "prime" example would be a comment section or a message thread in a forum.  Something like this:

![](/image-figures/forum-example.svg)

Then you can use something called a "prime segment".  A prime segment has the left/right relationship of regular segments with the standard gutter applied.  But the minor/major relationship is driven by whatever's in the minor wrapper as a static size.  For example, if you have an avatar image that is 45px in width, then the major container will be the full length of the parent container, minus 45px and the gutter width. Like this:

![](/image-figures/forum-example-with-tiles.svg)

And here's how to use them:

```
<div class="prime-seg">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

With Web Components:

```
<prime-seg>
  <x-minor></x-minor>
  <x-major></x-major>
</prime-seg>
```

So, for the example above, it might look something like this:

```
<prime-seg>
  <x-minor>
    <img src="avatar" />
  </x-minor>
  <x-major>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Velor du salia sor aute vehentor!
    </p>
  </x-major>
</prime-seg>
```

## "I Needs Me Some Breakpoints, Brah!" ##

Remember how I told you that the parent element does all the work?  This becomes even more elegant when breakpoints are introduced.  Segments provide the following breakpoints:

- Full size, or "default"
- Large (lg)
- Medium (md)
- Tablet (tablet)
- Small (sm)
- Extra Small (xs)

And here's how you use them:

```
<div class="seg thirds lg-fifths tablet-stack">
  <div class="minor"></div>
  <div class="major"></div>
</div>

<div class="segment fifths lg-thirds md-half tablet-stack">
  <div class="minor"></div>
  <div class="major"></div>
</div>
```

With Web Components:

```
<x-seg class="thirds lg-fifths tablet-stack">
  <x-minor></x-minor>
  <x-major></x-major>
</x-seg>

<x-seg class="fifths lg-thirds md-half tablet-stack">
  <x-minor></x-minor>
  <x-major></x-major>
</x-seg>
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

## Custom Whitespace ##

The panel web component includes a "space" attribute.  This allows you to adjust a panel's whitespace inline.  This can be beneficial when certain panels needed adjusted when doing a stacked layout. For example:

```
<panel-wrapper id="hero">
  <panel-inner>

  </panel-inner>
</panel-wrapper>
<panel-wrapper id="tagline">
  <panel-inner space="35">

  </panel-inner>
</panel-wrapper>

...

```

Under normal circumstances, mixing style with markup should be avoided.  But due to the nature of panels &ndash; especially acting as a divider or section grouper &ndash; it makes sense.  Whichever way you prefer, classes-only or the whitespace attribute, just stay consistent with all your panels.  Personally, I find the convenience of the whitespace feature beneficial, but choose whichever one works best for you.

## Some Additional Perks ##

In addition to general segments behavior, the Segments library also offers you a few more features, or "perks".  This includes:

- wrap [clear-wrap, border-wrap, wrap]
- rack

### Wraps ###

Let's break these guys down: First, wrap:  The "wrap" class adds a background color, and padding all around an element.  It is a block element that can be used as a wrapper.  For example, below we have three sections.  The middle section is using the "wrap" class:

![](/image-figures/wrap-example.svg)

Notice how the second object has a background, as well as padding all around the content.  You can change the color of a wrap by adding your own additional class with a background color property.  For example:

```
# CSS

.wrap.blue {
  background-color: #c7e8f5;
}


# HTML

<div class="wrap blue">
  ...
</div>
```

... which results in:

![](/image-figures/wrap-with-color-example.svg)

Border wrap is similar, only it adds a border instead of a background, like so:

![](/image-figures/border-wrap-example.svg)

Clear wrap is a little different: It adds top and bottom padding only.  The "clear-wrap" gives you a convenient way to seperate items with some whitespace, without compromising the left and right alignment.

### Racks ###

Suppose you want a collection of social medial icons, how would you do that? Simple: Just rack 'em up!  The "rack" class helps you lay out items side-by-side without needing a bunch of column markup.  For example, what if you want links at the bottom of your footer layed out horizontally, like so:

![](/image-figures/rack-footer-example.svg)

Racks work on the following tags:

- div
- "a" tag
- "i" tag

The "rack" class comes with a few of it's own qualifier classes, as well:

- extend
- with-dividers
- no-gap
- center
- right

The "rack" class's default behavior is to compress together.  You can apply the "extend" class in order to cause the items to fill up the parent.

And, if you want to visually divide the items from each other, you can use the "with-dividers" class:

![](/image-figures/rack-footer-with-dividers-example.svg)

When in "default" mode, you can also assign the grouping to the right-hand side or center it by using the "center" and "right" classes respectively:

```
<div class="rack with-dividers center">
...
</div>
```

... or:

```
<div class="rack with-dividers right">
...
</div>
```

![](/image-figures/rack-footer-align-right-example.svg)

## Atom &amp; VS Code Snippets ##

"Ooh, you know what would be really cool? If there was a Segments library for Atom &amp; VS Code!"

There is!  If any of you are using the popular Atom Text Editor or Visual Studio Code, the Segments repo comes with a snippets.cson and segments.code-snippets file which gives you a bunch of Segments snippets. Just be aware: these are using the web components flavor of Segments.

Observe:

```
panel
thirds
```

Like other Atom &amp; VS Code snippets, when you hit tab those two elements above actually create the following:

```
<panel-wrapper>
  <panel-inner>
    <x-seg of="3">
      <x-minor></x-minor>
      <x-major></x-major>
    </x-seg>
  </panel-inner>
</panel-wrapper>
```

Amazing, huh!  You can save tons of time knocking out site layouts with Segments and the provided snippets.

## Changing Default Values ##

Instructions on how to change default values is coming soon.  In the meantime, if you've worked with Grunt and NodeJS, then you can check out the projects Grunt file for configuration and commands, and then all the default values are found at the top of the "stylus/segments.styl" file.  Once you make your change, you can run `grunt create` to compile.
