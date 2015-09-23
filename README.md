PatternBolt
===========

Patternbolt is a fine selection of SVG pattern background, packed in a single or SCSS (or CSS ) file.<br>
The pattern is added in a "after" element and your original element still be inalterate and ready for manipulations. As they are vectors they never pixelate, not even on 4k screens. 
The pattern selection still be under development, to see the showcase, visit the <a href="http://buseca.github.io/patternbolt/">demo page</a>

##SCSS version
The Scss version is the main one, it's the more advanced one and its pattern library is always up-to-date.<br>
To use it you can follow the instruction commented directly in the Scss file.<br>
Basically you can call the whole Patternbolt Scss file in your project with an @import or just copy all its lines into your main Scss file. To insert a pattern use the related mixin, as in the examples below.

### Sass variables

    {String} $pattern - pattern name, it's also the name of the class
    {Number} $background-size [200px] - width/height of pattern
    {Color} $background-color [#000] - hex value of background color
    {Color} $foreground-color [#fff] - hex value of foreground color (the SVG)
    {Number} $opacity [1] - opacity, from 0 to 1
    {String} $mask [none] - value 'mask' if the pattern has to be used as covering mask over an image

### Sass Mixin

**basic scss mixin**

    @mixin pb($pattern){}

**example**

    .item {
       @include pb('buseca-1');
    }

**the css output**

    .item {
      position: relative;
      z-index: 1;
      &::after {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%2255%2055%2040%2040%22%20enable-background%3D%22new%2055%2055%2040%2040%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22rgba(255,255,255,1)%22%3E%0A%3Cpath%20d%3D%22M55%2C55h40v40H55V55z%20M95%2C86.987v-3.99l-1.997%2C1.997L95%2C86.987z%20M63%2C63l6.003-6.006L67.006%2C55h-3.994%0A%09l1.991%2C1.994L63%2C59l-4-4h-3.997L63%2C63z%20M87.013%2C55L95%2C62.987V59l-4-4H87.013z%20M75%2C55L55%2C75v3.997L78.997%2C55H75z%20M57.003%2C64.994%0A%09L55%2C66.997V71l6.003-6.006L55%2C58.997v3.997L57.003%2C64.994z%20M78.997%2C95l2.006-2.006L75%2C87l-4%2C4l-2-2.003l0.003-0.003l4-4l-4-3.994%0A%09L71%2C79l16.006%2C16H91L71%2C75l-5.997%2C6l4%2C3.994l-2%2C2L65%2C84.997l0.003-0.003L63%2C83l-2%2C1.987l0.003%2C0.007l-2%2C2.003l-2-1.997l-1.753%2C1.75%0A%09L83.003%2C59l2%2C2.003l-4%2C3.997l3.991%2C4.003L83%2C71l-4-4l-1.997%2C1.994l-4%2C4L95%2C94.987v-3.99L77.003%2C72.994l2-1.997L83%2C75l3.994-3.994%0A%09L87%2C71.016l0.013-0.009l1.99%2C1.987L86.997%2C75l-1.994%2C1.994L87%2C79l0.003-0.003L91%2C83l4-4v-4l-4%2C4l-2.003-2l4.006-4.006l-3.99-3.987%0A%09L91%2C67.031l4%2C4.031v-4.056l-4-3.975L87%2C67l-1.997-2.006l4-4L83%2C55L55%2C82.997V87l1.997%2C2L59%2C91l4.003-4.003l1.997%2C2l-3.997%2C3.997%0A%09L63%2C95l0.003-0.003L63.006%2C95H67l-2.003-1.997l2-2.003L71%2C95l4-4l2.003%2C1.994L75%2C95H78.997z%20M55%2C91v4h4.006L55%2C91z%22/%3E%0A%3C/svg%3E");
        background-size: 200px;
        background-color: rgba(0,0,0,1);
        content: '';
        z-index: -1;
        transition: background-image 0.1s ease-in-out;
      }
    }

**advanced scss mixin**

    @mixin pb($pattern, $background-size, $background-color, $foreground-color, $opacity, $mask){}

**example**

    .item {
      @include pb('buseca-1', 25px, #f00, #0f0, 0.5, 'mask');
    }
    
**the css output**

    .item {
      position: relative;
      z-index: 1;
      &::after {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%2255%2055%2040%2040%22%20enable-background%3D%22new%2055%2055%2040%2040%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22rgba(0,255,0,0.5)%22%3E%0A%3Cpath%20d%3D%22M55%2C55h40v40H55V55z%20M95%2C86.987v-3.99l-1.997%2C1.997L95%2C86.987z%20M63%2C63l6.003-6.006L67.006%2C55h-3.994%0A%09l1.991%2C1.994L63%2C59l-4-4h-3.997L63%2C63z%20M87.013%2C55L95%2C62.987V59l-4-4H87.013z%20M75%2C55L55%2C75v3.997L78.997%2C55H75z%20M57.003%2C64.994%0A%09L55%2C66.997V71l6.003-6.006L55%2C58.997v3.997L57.003%2C64.994z%20M78.997%2C95l2.006-2.006L75%2C87l-4%2C4l-2-2.003l0.003-0.003l4-4l-4-3.994%0A%09L71%2C79l16.006%2C16H91L71%2C75l-5.997%2C6l4%2C3.994l-2%2C2L65%2C84.997l0.003-0.003L63%2C83l-2%2C1.987l0.003%2C0.007l-2%2C2.003l-2-1.997l-1.753%2C1.75%0A%09L83.003%2C59l2%2C2.003l-4%2C3.997l3.991%2C4.003L83%2C71l-4-4l-1.997%2C1.994l-4%2C4L95%2C94.987v-3.99L77.003%2C72.994l2-1.997L83%2C75l3.994-3.994%0A%09L87%2C71.016l0.013-0.009l1.99%2C1.987L86.997%2C75l-1.994%2C1.994L87%2C79l0.003-0.003L91%2C83l4-4v-4l-4%2C4l-2.003-2l4.006-4.006l-3.99-3.987%0A%09L91%2C67.031l4%2C4.031v-4.056l-4-3.975L87%2C67l-1.997-2.006l4-4L83%2C55L55%2C82.997V87l1.997%2C2L59%2C91l4.003-4.003l1.997%2C2l-3.997%2C3.997%0A%09L63%2C95l0.003-0.003L63.006%2C95H67l-2.003-1.997l2-2.003L71%2C95l4-4l2.003%2C1.994L75%2C95H78.997z%20M55%2C91v4h4.006L55%2C91z%22/%3E%0A%3C/svg%3E");
        background-size: 25px;
        background-color: rgba(255,0,0,0.5);
        content: '';
        opacity: 0.2;
        z-index: 0;
        transition: background-image 0.1s ease-in-out;
      }
    }



##CSS version
Just include it in your project whith this:

    <link rel="stylesheet" href="css/patternbolt.css" />
        
and add the right pattern class to your elements in the DOM. You can also change pattern color and the pattern size changing the background css property, check the <a href="http://buseca.github.io/patternbolt/">demo page</a> to see how to do it.<br>
Here come the list of CSS pattern classes in the library:

    .buseca-1
    .h-lines-bold
    .h-lines-medium
    .h-lines-light
    .o-lines-bold
    .o-lines-medium
    .o-lines-light
    .cross-bold
    .cross-medium
    .cross-light
    .cross-bold-thin
    .cross-medium-thin
    .cross-light-thin



##More info

You can check the demo pagea at http://buseca.github.io/patternbolt/<br>
Contributions are welcome!<br>
You can find me on twitter: **<a href="https://twitter.com/ruggeromotta">@ruggeromotta</a>**
