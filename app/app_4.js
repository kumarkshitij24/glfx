window.addEventListener('load', ()=> {
    document.body.style.opacity = 1
    new glfx({
        dom: canvas,
        easing: 0.1,
        bending: 1,
        wireFrame: false,
        vertexShader: vertexDistort_4,
        fragmentShader: fragmentDistort_2,
        widthSegment: 40,
        heightSegment: 40
    })
})