const acc_btns = document.querySelectorAll(".kitxva");
const acc_contents = document.querySelectorAll(".answer");
const faqs = document.querySelectorAll(".faq");

function handleCloseFaq() {
  faqs.forEach((faq) => {
    faq.classList.toggle("active");
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.replace("unactive");
    }
  });
}

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    handleCloseFaq();
    faq.classList.toggle("active");
  });
});

// function handleCloseFaq() {
//   faqs.forEach((faq) => {
//     faq.classList.remove("active");
//   });
// }

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     handleCloseFaq();

//     faq.classList.add("active");
//   });
// });