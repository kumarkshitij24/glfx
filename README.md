# About glfx

This is a simple WebGL Plugin, made for users to start with WebGL elements on their websites, in the simplest way.

[Demo](https://kshitij-theportfolio.me/glfx/)

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
import glfx, {vertex, vertexDistort_1, vertexDistort_2, vertexDistort_3, vertexDistort_4, vertexDistort_5, vertexDistort_6, fragment, fragmentDistort_1, fragmentDistort_2, fragmentDistort_3, fragmentDistort_4} from 'lerper';

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

* _dom_: canvas (fetches the canvas of the whole website, this is a default value and shouldn't be changed).

[//] <> (Scroll Controls)

* _easing_: 0.1 (this is the scroll smoothness value, the value ranges between 0.05 ~ 0.2, for best effect)
* _bending_: 1 (this is the adjustment time for scroll webgl animation effect)

__Note__: The easing value should be strictly under 0.05 ~ 0.2, exceeding or preceeding might break the effect.
Play with easing and bending value to understand synchronisation of effect.
          
[//] <> (WebGL Segment Controls)

* _widthSegments_: 40 (more the value, higher the gpu usage)
* _heightSegments_: 40 (more the value, higher the gpu usage)
* _wireFrame_: false (default is set to false, set it true to see the widthsegments and heightsegments).

__Note__: The values for width and height segments can be different, it normally ranges from 5 ~ 1000, but it is recommended to use segments which is optimal for low-end systems as well.
Set the wireframe to true, and play around with width and height segments to better understand, segments.

[//] <> (WebGL Shader Controls)

* _vertexShader_: vertex, (default is set to vertex).
* _fragmentShader_: fragment (default is set to fragment).

__Note__: the vertexShader options takes 7 different values :
1. vertex - the default canvas.
2. vertexDistort_1
3. vertexDistort_2
4. vertexDistort_3
5. vertexDistort_4
6. vertexDistort_5
7. vertexDistort_6

and the fragmentShader currently takes 5 different values :
1. fragment - the default canvas.
2. fragmentDistort_1
3. fragmentDistort_2
4. fragmentDistort_3
5. fragmentDistort_4

