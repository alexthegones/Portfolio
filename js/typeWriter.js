var anim = document.getElementById('TitleAnim');
var media = document.getElementById('media');

new Typewriter(anim, media, {
  // deleteSpeed: 20,
  delay: 3000,
  loop: true,
})
  .changeDelay(100)
  .typeString("Bonjour et bienvenue, <br>")
  .pauseFor(500)
  .typeString("je m'appelle <strong>Alexandre</strong> ")
  .pauseFor(1000)
  .typeString("et je suis Developpeur Web. <br><br>")
  .typeString(
    '<img src="https://img.icons8.com/cotton/64/000000/developer.png"/> '
  )
  .pauseFor(1500)
  .typeString('<img src="https://img.icons8.com/color/48/000000/html-5.png"/>')
  .typeString('<img src="https://img.icons8.com/color/48/000000/css3.png"/>')
  .pauseFor(1500)
  .typeString(
    '<img src="https://img.icons8.com/color/60/000000/javascript.png"/> '
  )
  .pauseFor(1500)
  .typeString('<img src="https://img.icons8.com/dusk/60/000000/sql.png"/> ')
  .pauseFor(1500)
  .typeString(
    '<img src="https://img.icons8.com/officel/60/000000/php-logo.png"/> '
  )
  .pauseFor(1500)
  .typeString('<img src="https://img.icons8.com/color/60/000000/symfony.png"/>')

  .start();
