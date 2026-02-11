$(function () {
  const title = $("#pageTitle");
  const image = $("#homePic");
  const button = $("#clickButton");

  const originalSize = title.css("font-size");
  const originalColor = title.css("color");

  image.css({
    borderStyle: "solid",
    borderColor: "#800080",
    borderWidth: "0px"
  });

  button.on("click", function () {
    title.animate({ fontSize: "3em" }, 700)
         .animate({ fontSize: originalSize }, 700);

    title.css("color", "purple");
    setTimeout(function () {
      title.css("color", originalColor);
    }, 800);

    image.animate({ borderWidth: "10px" }, 500)
         .animate({ borderWidth: "0px" }, 500);
  });
});
