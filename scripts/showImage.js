let photo = new Array();

photo["nature"] = new Image(400, 300);
photo["nature"].src =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop";

photo["city"] = new Image(400, 300);
photo["city"].src =
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop";

photo["mountain"] = new Image(400, 300);
photo["mountain"].src =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop";

photo["sea"] = new Image(400, 300);
photo["sea"].src =
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop";

photo["forest"] = new Image(400, 300);
photo["forest"].src =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?";

function prosm(list) {
  var selectedValue = list.options[list.selectedIndex].value;
  var displayDiv = document.getElementById("photoDisplay");

  if (selectedValue === "") {
    displayDiv.innerHTML =
      '<p style="color: #666;">Оберіть фотографію зі списку для перегляду</p>';
    return;
  }

  var imgElement = document.createElement("img");
  imgElement.src = photo[selectedValue].src;
  imgElement.alt = list.options[list.selectedIndex].text;
  imgElement.style.maxWidth = "100%";
  imgElement.style.maxHeight = "400px";

  displayDiv.innerHTML = "";
  displayDiv.appendChild(imgElement);
}
