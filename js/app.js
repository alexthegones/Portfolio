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

// .setClassToggle(".skills-container", "fade-in")

window.addEventListener("load", () => {
  TL.from(algo, 1.5, { top: -150, ease: "power2.out" }, 0.3).staggerFrom(
    medias,
    1.5,
    { left: -200, ease: "power2.out" },
    0.3,
    "-=1"
  );

  TL.play();
});
// var cards = document.getElementsByClassName("skill-card");
// for (var i = 0; i < cards.length; i++) {
//   // create a scene for each element
//   new ScrollMagic.Scene({
//     triggerElement: cards[i], // y value not modified, so we can use element as trigger as well
//     offset: 50, // start a little later
//     triggerHook: 0.9,
//   })
//     .setClassToggle(cards[i], "fade-in") // add class toggle
//     .addIndicators({ name: "skill-card " + (i + 1) }) // add indicators (requires plugin)
//     .addTo(controller);
// }

// window.addEventListener("scroll", () => {
//   TL
//     .staggerFrom(skills, 2, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)

//     TL.play();
//   });
