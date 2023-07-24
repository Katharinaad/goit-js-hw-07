import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item>"
   <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
}

ulGallery.innerHTML = markup;

ulGallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();
  console.dir(instance);

  window.addEventListener("keydown", function (event) {
    const ESC_KEY_CODE = "Escape";
    const visible = basicLightbox.visible();
    if (event.code === ESC_KEY_CODE) {
      instance.close();
    }
  });
}
