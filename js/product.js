$(document).ready(function () {
  $("#open__aside").click(function () {
    $(".aside__mobile").show();
  });
});

$(document).ready(function () {
  $("#close__aside").click(function () {
    $(".aside__mobile").hide();
  });
});

var acc = document.querySelectorAll("#open__subnav");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var subnav = this.nextElementSibling;
      if (subnav.style.display === "block") {
        subnav.style.display = "none";
      } else {
        subnav.style.display = "block";
      }
    });
  }
