gsap.from(".header-title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".content", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.2
});

gsap.from(".navbar", {
    duration: 1.2,
    y: -100,
    opacity: 0,
    ease: "power3.out"
});