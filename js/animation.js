var medias = document.querySelectorAll(".media-btn");
var skills = document.querySelectorAll(".skill-card");
var algo = document.querySelector(".algo");

var controller = new ScrollMagic.Controller();
const TL = gsap.timeline({ paused: true });

var tween = TweenMax.staggerFrom(
  skills,
  2,
  { top: -50, opacity: 0, ease: "power2.out" },
  0.3
);
var scene = new ScrollMagic.Scene({
  triggerElement: ".skills-container",
})
  .triggerHook(0.3)
  .setTween(tween)
  .addTo(controller);

window.addEventListener("load", () => {
  TL.from(algo, 1.5, { right: -700, ease: "power2.out" }, 0.3)
    .staggerFrom(medias,1.5,{ left: -200, ease: "power2.out" },0.3,"-=1"
  );

  TL.play();
});
