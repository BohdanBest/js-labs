$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    var checkedCount = $('input[type="checkbox"]:checked').length;
    if (checkedCount >= 3) {
      $('input[type="checkbox"]').prop("disabled", true);
    }
  });
});
