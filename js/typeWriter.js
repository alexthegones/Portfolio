var anim = document.getElementById('TitleAnim');
var media = document.getElementById('media');

new Typewriter(anim, media, {
  // deleteSpeed: 20,
  delay: 3000,
  loop: true,
})
  .changeDelay(100)
  .pauseFor(500)
  .typeString("<span style=color:#f7ca18> Informaticien </span> <img src=>")
  
  .start();
