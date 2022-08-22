
// modal
const resultToggle = new bootstrap.Modal(document.querySelector('#resultModal'));

const flowerAniamtion = ((target, position) => {
  gsap.set(target, {transformOrigin: position});
  const tl = gsap.timeline();
  tl.from(target, { duration: 2, scale: 0 })
    .from(
      target,
      { duration: 2, rotation: -30 },
      "-=2"
    )
    .to(target, {
      duration: 2,
      rotation: -5,
      yoyo: true,
      repeat: -1,
    });
})

const scratchHandAniamtion = (() =>{ 
  const hand = ".js-scratch-hand";
  const tl = gsap.timeline();
  gsap.set(hand, { opacity: 0 });
  tl.to(hand, { duration: .8, opacity: 1, x: -50})
    .to(hand, { duration: .8,  x: 50})
    .to(hand, { duration: .8, x: -50})
    .to(hand, { duration: .8, opacity: 0, x: 50})
})

//刮刮樂套件
function initScratch() {
  var _this = this;
  var scContainer = document.getElementById("js--sc--container");
  var sc = new ScratchCard("#js--sc--container", {
    scratchType: SCRATCH_TYPE.BRUSH,
    containerWidth: scContainer.offsetWidth,
    containerHeight: scContainer.offsetWidth / 1.0796,
    brushSrc: "./img/brush.png",
    imageForwardSrc: "./img/scratch-area.png",
    imageBackgroundSrc: "./img/prize_01.png",
    percentToFinish: 50,
    callback: function () {
      resultToggle.show();
      flowerAniamtion('.result-flower-1', '20% 50%')
      flowerAniamtion('.result-flower-2', '80% 70%')
    },
  });
  sc.init().then(function () {
    sc.canvas.addEventListener("scratch.move", function () {
      _this.percent = sc.getPercent().toFixed(2);
    });
  });
}
$(function () {
  setTimeout(function () {
    $(".scratch").removeClass("invisible").addClass("bounceIn");
  }, 500);
  scratchHandAniamtion();

  initScratch();
});
