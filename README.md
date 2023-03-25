# About glfx

This is a simple WebGL Plugin, made for users to start with WebGL elements on their websites, in the simplest way.

[Demo](https://kumarkshitij24.github.io/glfx/)

# Installation 

#### glfx is build over threeJs and gsap library, use CDN to add threeJS and gsap to your page.

ThreeJs : `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>`

Gsap : `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>`

<ins> _Using NPM:-_ </ins>

`npm i --save-dev glfxlib`

<ins> _Using CDN:-_ </ins>

UNPKG: `https://unpkg.com/browse/glfxlib@1.0.0/dist/glfx.min.js`

jsDelivr: `https://cdn.jsdelivr.net/npm/glfxlib@1.0.0/dist/glfx.min.js`

# Usage:

## Starter HTML:

```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Document </title>
</head>
<body>

    <main>
        <div data-scroll>
            .... Your Code Here ....
        </div>
    </main>
    
    <div id="canvas"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

## Starter JS:

```
import glfx, {vertex, vertexDistort_1, vertexDistort_2, vertexDistort_3, vertexDistort_4, vertexDistort_5, vertexDistort_6, fragment, fragmentDistort_1, fragmentDistort_2, fragmentDistort_3, fragmentDistort_4} from 'glfxlib';

const gl = new glfx({
    dom: canvas,

    // Scroll Controls

    easing: 0.1,
    bending: 1,

    // WebGL Segment Controls

    widthSegments: 40,
    heightSegments: 40,
    wireFrame: false,

    // WebGL Shader Controls

    vertexShader: vertex,
    fragmentShader: fragment
})
```

## Options:

The default value for **`dom`** option is set to canvas which fetches the canvas of the whole website and shouldn't be changed.

### Scroll Controls
* **`easing`**: This is the scroll smoothness value and should be strictly between **`0.05` ~ `0.2`** for best effect. The value can be adjusted and experimented with, to better understand the synchronization of the effect.
* **`bending`**: This is the adjustment time for the scroll WebGL animation effect.

### WebGL Segment Controls
* **`widthSegments`**: This controls the number of horizontal segments in the WebGL animation effect. Increasing the value will result in higher GPU usage. The recommended value ranges from **`5` ~ `1000`**.
* **`heightSegments`**: This controls the number of vertical segments in the WebGL animation effect. Increasing the value will result in higher GPU usage. The recommended value ranges from **`5` ~ `1000`**.
* **`wireFrame`**: This option is set to **`false`** by default, but can be set to **`true`** to see the width and height segments. It is recommended to use segments that are optimal for low-end systems as well.

### WebGL Shader Controls
* **`vertexShader`**: This option has 7 different values:

    * `vertex`: This is the default canvas.
    * `vertexDistort_1`
    * `vertexDistort_2`
    * `vertexDistort_3`
    * `vertexDistort_4`
    * `vertexDistort_5`
    * `vertexDistort_6`
* **`fragmentShader`**: This option has 5 different values:

    * `fragment`: This is the default canvas.
    * `fragmentDistort_1`
    * `fragmentDistort_2`
    * `fragmentDistort_3`
    * `fragmentDistort_4`
<br/>       
Note: The default values for **`vertexShader`** and **`fragmentShader`** are vertex and fragment respectively.
<br/>
It is recommended to experiment with different options and values to achieve the desired effect while keeping in mind the GPU usage and optimization for low-end systems. Set the **`wireFrame`** option to **`true`** and play around with **`widthSegments`** and **`heightSegments`** to better understand the segments.
