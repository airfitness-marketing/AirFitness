// TweenMax.from("#first-item", 1.5, {
//   opacity: 0,
//   x: -600,
//   y: 600,
//   delay: 0.5,
// });


// TweenMax.from("#second-item", 1.5, {
//   opacity: 0,
//   x: -600,
//   y: -600,
//   delay: 0.5,
// });

TweenMax.staggerFrom(".box", 0.5, {
  opacity: 0,
  y: 200,
  delay: 2,
  rotation: 360,
  scale: 2,
}, 0.2);