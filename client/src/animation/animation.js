import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

export const PreLoaderAnimation = ()=>{

    tl.to(".preloader",{
        height:0,
        duration: 2.5,
        ease: "Power3.easeInOut",
    })
    .from("main",{
        ease: "Power3.easeInOut",
    })
}