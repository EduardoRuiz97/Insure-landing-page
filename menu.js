let menuBtn = document.querySelector(".menu__icon");
let closeBtn = document.querySelector(".close__icon");
let menuMobile = document.querySelector (".menu__mobile");

menuBtn.addEventListener("click", ()=> {
  menuMobile.classList.add("menu__mobile__show");
  closeBtn.style.display = "block"
  menuBtn.classList.add("menu__icon__disapear");
});

closeBtn.addEventListener("click", ()=>{
  menuMobile.classList.remove("menu__mobile__show");
  closeBtn.style.display = "none";
  menuBtn.classList.remove("menu__icon__disapear");
})