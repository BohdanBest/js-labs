$(document).ready(function () {
  $("h3").each(function () {
    var nextDiv = $(this).next("div");
    if (nextDiv.length) {
      nextDiv.insertBefore($(this));
    }
  });
});
