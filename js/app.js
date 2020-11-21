var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".skills-container",
    triggerHook: 0.4,
//   reverse: false
})

  .setClassToggle(".skills-container", "fade-in")
  .addTo(controller);

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

var twenn = TweenMax.from("skills-container", 1, { left: -700, rotation: -50, ease: Power2.easeInOut })