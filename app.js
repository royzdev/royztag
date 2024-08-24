particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 45,
            "density": {
                "enable": true,
                "value_area": 400
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 200,
                "height": 200
            }
        },
        "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": true
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 60,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 25,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 125,
                "rotateY": 300
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
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 250,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 115,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
