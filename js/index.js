document.addEventListener("DOMContentLoaded", () => {
  var hh = $("#header").outerHeight();
  var fh = $("footer").outerHeight();
  // using https://rawgit.com/bassjobsen/affix/master/assets/js/affix.js
  $(".navbar").affix({
    offset: {
      top: hh,
      bottom: hh - 200
    }
  });
  // scrollspy to <body>
  $("body").scrollspy({
    target: ".navbar",
    offset: 80
  });
  //smooth scrolling on all links inside the navbar
  $(".scroll a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  $(".jumbo-content-area")
    .first()
    .delay(200)
    .animate({
        opacity: "1"
      },
      1000
    );
  $(window).scroll(function () {
    $(".jumbo-content-area").css("opacity", 1 - $(window).scrollTop() / 400);
  });
});