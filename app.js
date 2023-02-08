const acc_btns = document.querySelectorAll(".kitxva");
const acc_contents = document.querySelectorAll(".answer");
const faqs = document.querySelectorAll(".faq");

function handleCloseFaq() {
  faqs.forEach((faq) => {
    faq.classList.remove("active");
  });
}

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    handleCloseFaq();

    faq.classList.add("active");
  });
});

//toglle and remove active class

// acc_btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
        
//         const content = btn.nextElementSibling;
//         const active = document.querySelector(".active");

//         if (active) {
//             active.classList.toggle("active");
//             active.style.maxHeight = 0;
//         } else {
//         content.classList.toggle("active");
//         content.style.maxHeight = content.scrollHeight + "px";}
//     })
// })

//Toggle active class2

// for (let i = 0; i < faqs.length; i++) {
//     faqs[i].addEventListener("click", () => {
//         faqs[i].classList.toggle("none");
//     })
// }