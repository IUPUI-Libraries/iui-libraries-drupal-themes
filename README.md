# IU Indianapolis Libraries Rivet Custom Drupal Themes

Drupal sub themes built on the [Drupal's stable9 base theme](https://www.drupal.org/docs/develop/theming-drupal/sub-theming-using-stablestable-9-as-a-base-theme) 
using [IU Rivet Design System](https://rivet.iu.edu/)

## Features

Several options for the layout of the theme are available at __Administration :: Appearance :: Appearance settings :: IU Indianapolis Libraries__.

### Default and Alternative Header

Two header options are available using the __Template Option__

#### Default Header

![Deafult header](./iui_libraries/images/docs/default_header.png)

#### Alternative Header

![Alternative header](./iui_libraries/images/docs/alternative_header.png)

### Campus Selection

A dropdown list set a specific campus or no campus for use in both versions of the header.

![CAmpus selection](./iui_libraries/images/docs/campus_selection.png)

### Top URL (Alternative Header only)

If using hte Alternative Header, the top title link next to the IU Trident can be assigned a custom URL.

![Top URL](./iui_libraries/images/docs/top_url.png)

### Footer Color

Using the __Footer Option__, the background color for the bottom IU footer can be set. Options include White and Crimson.

### Footer Links

Multiple footer link can be added between the IU Footer's Trident and Copyright link. The order of these footer links will be displayed left to right.

![Footer links](./iui_libraries/images/docs/footer_links.png)

## Favicon

Both the IU Trident and the UL Window favicons are included in the site. Creating a soft link in the root directory of a sub-theme can be used to point to the wanted favicon. The soft link must be names __favicon.png__. The images are located in `iui_libraries/images/favicons/`.
