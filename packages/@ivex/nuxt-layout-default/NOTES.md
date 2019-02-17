# Layout

## TODO

- [ ] keep page scroll

## Keep scroll

```js
const state = {
  pages: {
    '/': {
      scrollTop: 234,
    },
    '/inner': {
      scrollTop: 586,
    },
  },
}
```

## Mode

Header:

- mode: fixed | overlay | floated - fixed transparent header over page content
  - pinned - fixed header (flex) on top of page content, out of scroll area
  - fixed - fixed header on top of page content, in scroll area
  - overlay - (flat, transparent) fixed header over page content, in scroll area
- flat - Removes the toolbar box-shadow
- scroll
  - off-screen - Will transition the toolbar and extension off screen when scrolling down
  - offset : 0, // scroll tolerance in px before state changes
  - tolerance : 0, // or scroll tolerance per direction
  - tolerance : { down : 0, up : 0 },

footer:

- mode: fixed | overlay | floated | below | none - fixed transparent header over page content
  - pinned - fixed footer (flex) on top of page content, out of scroll area
  - fixed - fixed footer on top of page content, in scroll area
  - overlay - (flat, transparent) fixed header over page content, in scroll area
- flat - Removes the footer box-shadow
- scroll
  - off-screen - Will transition the toolbar and extension off screen when scrolling down
  - offset : 0, // scroll tolerance in px before state changes
  - tolerance : 0, // or scroll tolerance per direction
  - tolerance : { down : 0, up : 0 },

Default layout:

```js
const layout = {
  header: {
    mode: 'overlay',
  },
  footer: {
    mode: 'below',
  },
}
```

# Layout types

ASCII art from https://seanho.github.io/ascii-layout/

<!-- Layout>(Header|(Scroll Area > Content)|Footer) -->

```
 ┌────────────────────────┐
 │         Layout         │
 │ ┌────────────────────┐ │
 │ │       Header       │ │
 │ └────────────────────┘ │
 │ ┌────────────────────┐ │
 │ │    Scroll Area     │ │
 │ │ ┌────────────────┐ │ │
 │ │ │     Content    │ │ │
 │ │ └────────────────┘ │ │
 │ └────────────────────┘ │
 │ ┌────────────────────┐ │
 │ │       Footer       │ │
 │ └────────────────────┘ │
 └────────────────────────┘
```

<!-- Layout>(Header|(Scroll Area > Content|Footer)) -->

```
 ┌────────────────────────┐
 │         Layout         │
 │ ┌────────────────────┐ │
 │ │       Header       │ │
 │ └────────────────────┘ │
 │ ┌────────────────────┐ │
 │ │    Scroll Area     │ │
 │ │ ┌────────────────┐ │ │
 │ │ │     Content    │ │ │
 │ │ └────────────────┘ │ │
 │ │ ┌────────────────┐ │ │
 │ │ │     Footer     │ │ │
 │ │ └────────────────┘ │ │
 │ └────────────────────┘ │
 └────────────────────────┘
```

```
+----------------------------------------------------------------------------+
|                                                                            |
|                                                                            |
|                                                                            |
+----------------------------------------------------------------------------+
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
+--------------------------------------------------------------------------+-+
|                                                                            |
|                                                                            |
|                                                                            |
+----------------------------------------------------------------------------+


+----------------------------------------------------------------------------+
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
+--------------------------------------------------------------------------+X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
+--------------------------------------------------------------------------+ |
|                                                                          | |
|                                                                          | |
|                                                                          | |
+--------------------------------------------------------------------------+-+


+----------------------------------------------------------------------------+
|                                                                            |
|                                                                            |
|                                                                            |
+----------------------------------------------------------------------------+
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          |X|
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
|                                                                          | |
+--------------------------------------------------------------------------+ |
|                                                                          | |
|                                                                          | |
|                                                                          | |
+--------------------------------------------------------------------------+-+

```
