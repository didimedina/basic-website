import anime from 'animejs';

anime({
    targets: '.anim-scale',
    scale: [0.8, 1],
    opacity: [0, 1],
    translateY: [150, 0],
    easing: 'easeOutQuad',
    duration: 800
})
