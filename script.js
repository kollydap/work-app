var menuOpener = document.querySelector(".icon__wrap");
// todo change clas nae to menu opener in html and css
var menu = document.querySelector(".centerPart");
// if (window.innerWidth < 901) {
//     menu.style.display = "none";
// }


window.addEventListener("resize", function () {
  if (this.window.innerWidth < 901) {
    menu.style.display = "none";
    // menuOpener.style.display = "block";
  }
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 900) {
    menu.style.display = "flex";
    // menuOpener.style.display = "none";
  }
});

menuOpener.addEventListener("click", function () {
  console.log(window.innerWidth);

  console.log(menu.style.display);
  // menu.style.display = 'flex'
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    console.log(menu.style.display);
  } else {
    menu.style.display = "none";
    console.log(menu.style.display);
  }
});
