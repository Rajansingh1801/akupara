new WOW().init();
document.documentElement.style.setProperty("--animate-duration", "2s");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
      $(".navbar").css({ padding: "10px 0px" });
      $("#navbar_top").css({ transition: "1000ms" });
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      document.body.style.paddingTop = "";
      $(".navbar").css("padding", "20px 0px");
    }
  });
});

setTimeout(function () {
  $(".loaders").css("display", "none");
}, 2500);

$(".nav-items").click(function () {
  //console.log("Clicked");
  $(".nav-items .active").removeClass("active");
  $(this).addClass("active");
});
