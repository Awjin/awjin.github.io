---
title: 'Web Typography: Five Easy Pieces'
---

## #1. Font Size

If they can't read it, they won't. 16px is the minimum. Use it for auxiliary copy, such as captions and buttons. 18px is a good standard, comfortable for extended reading.

Don't be afraid to go larger. This text starts at 16px and scales up with screen size.

## #2. Line Width

Approximately 75 characters per line (including spaces) lends a natural reading pace. That’s about 30 times the `font-size`. Place text in the center of the screen for proper ergonomics.

This text has a max width of 33rem.

## #3. Line Height

Line height should range from 1.2 to 1.5, depending on the content. Dense, scientific writing with lots to cover? Stay closer to 1.2. Easy reading, like a blog post? 1.35 to 1.5.

This text has a line height of 1.45.

![typography]({{ "assets/posts/2017-03-23-web-typography-five-easy-pieces/typography.jpg" | relative_url }})

## #4. Whitespace

Whitespace is punctuation, vital for timing and airing out long text. Set vertical breaks to about the height of one line.

```
$line-height: 1.45;
$whitespace: 1rem * $line-height;

h1, h2, h3,
p, ol, ul {
    margin-bottom: $whitespace;
}
```

## #5. Font Choice

Fonts are subjective, but an easy rule of thumb is to choose one font for headings and another for body text. The contrast creates a predictable pattern and helps the headings pop.

This text uses PT Serif for headings and PT Sans for the body.

## In Summary

  1. Font size at 18px+.
  1. Line width about 75 characters.
  1. Line height from 1.2 to 1.5.
  1. Paragraph breaks equal to line height.
  1. Contrasting fonts for headings and body.

Always test typographic styles on real content, varied in structure and length (don't use *lorem ipsum*--it doesn't have realistic feel). Read, read, read, tweaking until the content flows.

That's it. Five easy pieces. Start using them!

## References

  - [Butterick's Practical Typography](https://practicaltypography.com/)
  - [Glossary of Common Type Terminology](https://www.fontshop.com/glossary)
  - [Typographic Design Patterns and Best Practices](https://www.smashingmagazine.com/2013/05/typographic-design-patterns-practices-case-study-2013/)
  - [Typography Rules and Terms that Every Designer Must Know](http://www.creativebloq.com/typography/what-is-typography-123652)
  - [Vertical Rhythm in Typography](https://8thlight.com/blog/chris-peak/2012/12/30/vertical-rhythm.html)
