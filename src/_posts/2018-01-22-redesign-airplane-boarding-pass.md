---
title: 'Redesign: Airplane Boarding Pass'
---

Needless to say, boarding passes have bad UX. So bad, in fact, that [many](http://passfail.squarespace.com/) [others](http://blog.timoni.org/post/318322031/a-practical-boarding-pass-redesign) [have](https://uxplanet.org/while-i-was-redesigning-a-boarding-pass-paper-got-old-eda92055dd29) [redesigned](https://medium.com/@adamgf/boarding-pass-redesign-c72084d7793e) these awful things in their free time.

I figured I'd add another redesign to the pile, and provide the rationale behind how I edited this:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/1a.png" | relative_url }})

into this:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/1b.png" | relative_url }})

## Considerations

### 1. Respecting the Users

The boarding pass has three users: the passenger, the TSA agent, and the gate agent. The redesign should maximize info accessibility for everyone.

### 2. Respecting the Original Design

Any original intent should survive. For example, the barcodes appear to be placed strategically: one is located in the middle of the short side, and the other in the middle of the long side, making it easy to orient and scan the right one. Further, each barcode is surrounded by whitespace, which mitigates scanning errors. It would be smart not to mess with the barcodes.

### 3. Respecting the Material

The redesign must be sensitive to the hardware and economy of printing.
It should be the same size as the original, and should use an equal or lesser amount of ink.

With these considerations in mind, let’s start the redesign process!

## Culling

Delete the unnecessary.

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/2a.png" | relative_url }})

The result:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/2b.png" | relative_url }})

## Consistency

Most of the items are laid out consistently: small label on top, with the value in large font underneath. The highlighted items do not follow this information hierarchy:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/3a.png" | relative_url }})

Let’s make them consistent:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/3b.png" | relative_url }})

## Anchoring

The highlighted items are codes for gate agents. I’d guess that they are triangulated for max separation. Perhaps, through training, agents learn to examine the left side for code #1, the top right corner for code #2, and the bottom right corner for code #3.

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/4a.png" | relative_url }})

Interesting approach, but we can do better. Let’s take strong visual elements that already exist—the barcodes—and anchor codes to them. Now, instead of searching arbitrarily, the agent can use the barcodes as landmarks to locate codes.

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/4b.png" | relative_url }})

## Chunking

The passenger experiences two stages of flying: pre-gate and post-gate. When pre-gate, they need flight details and gate location. When post-gate, they need their boarding info.

All elements should be chunked into those stages:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/5a.png" | relative_url }})

Let’s place the first stage on the left and the second on the right,  punctuating with whitespace:

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/5b.png" | relative_url }})

## The Product

![1]({{ "assets/posts/2018-01-22-redesign-airplane-boarding-pass/1b.png" | relative_url }})

Consistent, scannable, and economical, with good usability for all users.
