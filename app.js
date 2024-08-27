particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 6.25,
            "density": {
                "enable": true,
                "value_area": 100
            }
        },
        "color": {
            "value": "#792388"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#210290"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 45,
                "height": 24
            }
        },
        "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 3,
                "opacity_min": 0.4,
                "sync": true
            }
        },
        "size": {
            "value": 1.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 7.6,
                "size_min": 0.6,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 12.5,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 8,
                "rotateY": 12.10
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 30.5,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 40,
                "size": 7.5,
                "duration": 1.5,
                "opacity": 2.5,
                "speed": 2.7
            },
            "repulse": {
                "distance": 28.1,
                "duration": 0.7
            },
            "push": {
                "particles_nb": 5.12
            },
            "remove": {
                "particles_nb": 5.8
            }
        }
    },
    "retina_detect": true
});
