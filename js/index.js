console.log("i'm working");
import gallery from "../menu.json";
import template from "../template/templ.hbs";
console.log("gallery:", gallery);
console.log(template);
const listCards = document.querySelector(".menu");
console.log("listCards:", listCards);
//const galleryMap = gallery.map({ gallery });
listCards.insertAdjacentHTML("beforeend", template(gallery));

// gallery.forEach((element) => {
//   //  template(element);
//   listCards.insertAdjacentHTML("bforeend", template(element));
//   console.log(element.id);
// });

//listCards.insertAdjacentHTML("beforeend", galleryMap);
