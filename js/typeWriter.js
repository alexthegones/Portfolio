var anim = document.getElementById('TitleAnim');
var media = document.getElementById('media');

new Typewriter(anim, media, {
  // deleteSpeed: 20,
  delay: 3000,
  loop: true,
})
  .changeDelay(100)
  .typeString("Bonjour et bienvenue sur mon site personnel, <br>")
  .pauseFor(500)
  .typeString("je suis <strong>Alexandre</strong> ")
  .pauseFor(1000)
  .typeString("et je suis <span style=color:#f7ca18> Développeur Web </span> <img src=https://img.icons8.com/cotton/64/000000/developer.png/>")
  
  .start();
