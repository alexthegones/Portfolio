var medias = document.querySelectorAll(".media-btn");
var skills = document.querySelectorAll(".skill-card");
var algo = document.querySelector(".algo");
var profile = document.querySelector(".profile_photo");

var controller = new ScrollMagic.Controller();
const TL = gsap.timeline({
  paused: true
});

//* Compétences
var tween = TweenMax.staggerFrom(
  skills,
  2, {
    top: -50,
    opacity: 0,
    ease: "power2.out"
  },
  0.3
);
var scene = new ScrollMagic.Scene({
    triggerElement: ".skills-container",
  })
  .triggerHook(0.3)
  .setTween(tween)
  .addTo(controller);

//* Photo profile 
var tween2 = TweenMax.from(
  profile,
  1.5, {
    left: -200,
    opacity: 0,
    ease: "power2.out"
  }, 0.3
);
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".profile_photo",
  })
  .triggerHook(0.3)
  .setTween(tween2)
  .addTo(controller);

window.addEventListener("load", () => {
  TL.from(algo, 1.5, {
      right: -300,
      ease: "power2.out"
    }, 0.3)
    .staggerFrom(medias, 1.5, {
      left: -200,
      ease: "power2.out"
    }, 0.3, "-=1");

  TL.play();
});