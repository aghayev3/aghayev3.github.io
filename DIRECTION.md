# Direction: Netscape, 1996

Chosen 2026-10-28 from four previews. Reference build: `previews/4-netscape/index.html`.

## The idea

A personal page built the way a careful webmaster built one in 1996: Netscape Navigator 3.0 defaults, one tidy column, bevelled tables, plain blue links. It must look deliberate and well organised, never broken, abandoned or ironic. The era signals someone who knows the web from the ground up; the neatness signals someone a business can trust.

The content idea runs through it: **every lock gets tested.** In 1851 Alfred Hobbs opened a Chubb lock, sold as unpickable, in public in London. The client's web app is the lock; Babak is the tester who works for them.

## Colour

| Role | Value | Use |
| --- | --- | --- |
| Page ground | `#c0c0c0` | Mosaic / Netscape default grey, whole page |
| Text | `#000000` | All running text |
| Link | `#0000ee` | Unvisited links, underlined |
| Visited link | `#551a8b` | Visited links |
| Active link | `#ff0000` | While pressed |
| Bevel light | `#ffffff` | Top/left edge of raised things |
| Bevel shadow | `#808080` | Bottom/right edge, rules |
| Title bars, table headers | `#000080` | Navy with white bold text |
| Code panels, inputs | `#ffffff` | Inset white fields |
| Warning text | `#8b0000` | The demo's "stranger's order" line (meets 4.5:1 on grey) |

## Type

- Text: Times New Roman, Times, serif. 17px, line height 1.4 (16px on phones).
- Headings: Arial, Helvetica, sans-serif, bold. h1 30px, h2 21px, h3 17px.
- Code: Courier New, Courier, monospace. Only in real code (the request/response) and the order input.
- System fonts only. No web fonts: they did not exist in 1996.

## Layout

- One column, max 600px, centred, 16px side padding. It was designed for a 640×480 screen and simply becomes full width on a phone.
- Centred masthead: small engraving, name, italic tagline, bracketed text nav `[ Services | Try It | Results | What's New | Contact ]`.
- Sections separated by bevelled `<hr>` rules (a thicker one under the masthead and above the footer).
- Images: greyscale, small, floated right beside text with a caption and a `[full size]` link; linked images keep the blue link border. They stack full width on phones.

## Components

- **Bevelled tables:** outset 2px outer border, inset 1px cell borders, 2px cell spacing, navy header row. Used for Services and Results.
- **Window panel:** grey outset box with a navy title bar. Used for the demo ("Order Lookup").
- **Buttons:** Windows 95 grey, 2px outset border, inset while pressed. The main action, "Connect on LinkedIn", is one of these, right under the intro.
- **What's New:** a dated `<dl>` list, newest first, real events only.
- **Footer:** `<address>` with name and e-mail, "Last modified" date, picture credits, an 88×31-style "Viewable with any browser" badge (enlarged to 112×40 so its text is 11px).
- **Visit counter:** green on black, counts only the visitor's own visits from their browser (localStorage). Never a made-up total.

## The live thing

The order-number demo, as a 1990s CGI form: `GET /cgi-bin/orders.cgi?id=1041`, a "Submit Query" button, the raw response in an inset white panel. Changing 1041 to 1042 shows a stranger's order and names the bug: broken access control, the top risk on the OWASP Top 10. Script: `previews/shared/demo.js`.

## Motion

None, by design. Pages of the era did not animate. Feedback is the bevel flipping from outset to inset on press and links changing colour.

## What is banned, even here

- Blinking text, marquees, "under construction" signs, animated GIFs, clip-art, MIDI, guestbooks, fake hit counts, frames.
- Anything that makes it look broken or abandoned. The current-date "Last modified" line and real 2026 dates keep it clearly alive.

## Deliberate exceptions to the design skills

Taste's house rules ban thin rules, monospace, bordered tables, default link colours and still pages. Those are this era's defining features, so they stay. Impeccable's "overused font" warning for Arial is ignored for this page (`.impeccable/config.json`). Every other check, including contrast and text size, still applies.

## Pictures

Two public-domain engravings from Wikimedia Commons, credited in the footer: "Chubb lock" (`previews/assets/chubb-engraving.jpg`) and "Chubb lock, Otto's Encyclopedia" (`previews/assets/chubb-lever.jpg`). Credits in `previews/assets/credits.json`.

## Open before launch

- Add a favicon (the live site's only console error is likely the missing one).
- Decide whether to show a PortSwigger progress figure (only with real numbers) and whether to state the BSCP exam as a goal.
- Optional: one or two lab writeups on GitHub to link from What's New.
