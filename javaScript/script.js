const accordian = document.querySelectorAll(".accordian");
const content = document.querySelectorAll(".content");
for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    content[i].classList.toggle("active");
    accordian[i].classList.toggle("active");
  });
}
