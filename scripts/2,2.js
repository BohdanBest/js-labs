let imageIndex = 0;
const images = [
  "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg",
  "https://img.freepik.com/free-vector/world-smile-day-greeting-card-with-text-empty-space-vector_1017-46370.jpg?semt=ais_items_boosted&w=740",
];
const captions = ["Натисніть, щоб змінити колір", "Не забувай посміхатися!"];
let captionColorIndex = 0;
const colors = ["black", "blue", "red"];

function handleClick(evt) {
  const elem = evt.target || evt.srcElement;
  const id = elem.id;

  if (id === "caption") {
    const caption = document.getElementById("caption");
    captionColorIndex = (captionColorIndex + 1) % colors.length;
    caption.style.color = colors[captionColorIndex];
  } else if (id === "image") {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById("image").src = images[imageIndex];
    document.getElementById("caption").innerText = captions[imageIndex];
  }
}
