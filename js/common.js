const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");
const $sub_banner1 = document.querySelector(".bn1");
const $sub_banner2 = document.querySelector(".bn2");
const $imgBtn = document.querySelectorAll(".btn_list>li");
const $container = document.querySelectorAll(".card_con>li");

$ham.addEventListener("click", function () {
  $hd.classList.toggle("on");
  $gnb.classList.toggle("on");
});

$sub_banner1.addEventListener("mouseenter", function () {
  $sub_banner1.classList.add("on");
});
$sub_banner1.addEventListener("mouseout", function () {
  $sub_banner1.classList.remove("on");
});

$sub_banner2.addEventListener("mouseenter", function () {
  $sub_banner2.classList.add("on");
});
$sub_banner2.addEventListener("mouseout", function () {
  $sub_banner2.classList.remove("on");
});

function show(num) {
  $imgBtn.forEach((a) => {
    a.classList.remove("on");
  });
  $imgBtn[num].classList.add("on");

  $container.forEach((b) => {
    b.classList.remove("on");
  });
  $container[num].classList.add("on");
}

$imgBtn.forEach((btn, i) => {
  btn.addEventListener("mouseenter", () => {
    show(i);
  });
});

// function show1(a) {
//   $sub_banner.forEach((a) => {
//     a.classList.add("on");
//   });
// }
// function show2(b) {
//   $sub_banner.forEach((b) => {
//     b.classList.remove("on");
//   });
// }

// $sub_banner.forEach((banner, i) => {
//   banner.addEventListener("mouseenter", () => {
//     show1(i);
//   });
// });
// $sub_banner.forEach((banner, i) => {
//   banner.addEventListener("mouseout", () => {
//     show2(i);
//   });
// });
