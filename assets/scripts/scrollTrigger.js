gsap.registerPlugin(ScrollTrigger);




gsap.to(".bgHero", {
    scrollTrigger: {
        trigger: ".bgHero",
        start: "top center",
        scrub: true,
    },
    y: -350
});



gsap.to(".backtitleSection2", {
    scrollTrigger: {
        trigger: ".backtitleSection2",
        start: "top 75%",
        scrub: true,
    },
    y: -150
});


gsap.to('#imageProject1', {
    scrollTrigger: {
        trigger: "#imageProject1",
        start: "top 80%",
        scrub: true
    },
    y: 50
});

gsap.to('#imageProject2', {
    scrollTrigger: {
        trigger: "#imageProject3",
        start: "top 80%",
        scrub: true
    },
    y: 50
});

gsap.to('#imageProject3', {
    scrollTrigger: {
        trigger: "#imageProject3",
        start: "top 80%",
        scrub: true
    },
    y: 50
});

gsap.to('.endBgTransi', {
    scrollTrigger: {
        trigger: ".endBgTransi",
        start: "top 80%",
        scrub: true
    },
    y: 50
});


gsap.to('footer',{
    scrollTrigger:{
        trigger : "main",
        start : "bottom 1%",
        scrub : true
    },
    zIndex : "9999"
})



