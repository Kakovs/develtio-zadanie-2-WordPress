gsap.registerPlugin(ScrollTrigger);

const HEADER = document.getElementsByTagName('header');
const HOMEBANER = document.getElementById('homeBanerSection');
const BLUEBACKGROUND = document.getElementsByClassName('blueBackground');
const CONTACTFORMHOME = document.getElementsByClassName('contactFormHomeBaner');
const TEXTINFORMATION = document.getElementsByClassName('textInformation');
const BACKGROUNDNFORMATION = document.getElementsByClassName('sideBackground');


ScrollTrigger.matchMedia({
    "(min-width: 1200px)": function(){
        gsap.fromTo(BACKGROUNDNFORMATION, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, delay:1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: BACKGROUNDNFORMATION,
            start: 'top 80%',
        }});
    },

    "(max-width: 1199px)": function(){
        gsap.fromTo(BACKGROUNDNFORMATION, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, delay:0, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: BACKGROUNDNFORMATION,
            start: 'top 80%',
        }});
    },

    "(min-width: 992px)": function(){
        gsap.fromTo(CONTACTFORMHOME, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, delay:2.5, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: CONTACTFORMHOME,
        }});
    },

    "(max-width: 991px)": function(){
        gsap.fromTo(CONTACTFORMHOME, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, delay:0, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: CONTACTFORMHOME,
        }});
    },

    "all": function(){
        gsap.fromTo(HEADER, {x: '-=5%', opacity: 0}, {x: 0, opacity: 1, stagger: 0, duration: 1,  scrollTrigger: {
            trigger: HEADER,
        }});

        gsap.fromTo(HOMEBANER, {y: '+=20%', opacity: 0}, {y: 0, opacity: 1, delay:1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: HOMEBANER,
        }});

        gsap.fromTo(BLUEBACKGROUND, {x: '-=100%', opacity: 0}, {x: 0, opacity: 1, delay:1.5, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: HOMEBANER,
        }});

        gsap.fromTo(TEXTINFORMATION, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: TEXTINFORMATION,
            start: 'top 80%',
        }});
    }
})