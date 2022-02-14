"use strict";

              //ClassListlar haqida
// const btns = document.querySelectorAll("button");

// // console.log(btns[1].classList.length);
// // console.log(btns[0].classList.item(1));
// // console.log(btns[0].classList.add("blue"));
// // console.log(btns[0].classList.remove("b"));
// // console.log(btns[0].classList.toggle("b"));

// // btns[0].addEventListener("click", () => {
// //   if(!btns[1].classList.contains("blue")){
// //     btns[1].classList.add("blue");
// //   }
// //   else{
// //     btns[1].classList.remove("blue");
// //   }
// // });

// btns[0].addEventListener("click", () =>{
//   btns[1].classList.toggle("blue");
// })


             // Delegatsiya haqida //

// const btns = document.querySelectorAll("button"),
// wrapper = document.querySelector(".wrapper");

// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.tagName == "BUTTON"){
//     console.log("click");
//   }
// });

             // Tanlanganlarni ishlatadi.

// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.classList.contains("crimson")){
//     console.log("click");
//   }
// });

// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("button.crimson")){
//     console.log("click");
//   }
// });

              // Dinamicheski button qo`shish.

// const btn = document.createElement("button");
// btn.classList.add("crimson");
// wrapper.append(btn);