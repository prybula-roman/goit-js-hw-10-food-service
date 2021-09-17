import gallery from "../menu.json";
import template from "../template/templ.hbs";
//localStorage.setItem("theme", "light-theme");
//localStorage.clear();
const listCards = document.querySelector(".menu");
listCards.insertAdjacentHTML("beforeend", template(gallery));

const body = document.querySelector("body");
//console.log(localStorage.getItem("theme"));

body.classList.add(localStorage.getItem("theme"));

const inp = document.querySelector(".theme-switch__toggle");
//console.dir(inp);
inp.addEventListener("click", () => {
  if (!body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
    localStorage.setItem("isChecked", "true");

    console.log(inp.classList);
    body.classList.add(localStorage.getItem("theme"));
    console.log("++++", localStorage.getItem("isChecked"));
    inp.checked = true;
    // console.log("++++", inp.checked);
  } else {
    localStorage.setItem("theme", "light-theme");

    console.log(inp.classList);
    localStorage.setItem("checked", "false");

    body.classList.remove("dark-theme");
    console.log("----", localStorage.getItem("isChecked"));
    inp.checked = false;
    // console.log("----", inp.checked);
  }
});
