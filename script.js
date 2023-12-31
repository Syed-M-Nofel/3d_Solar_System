$(document).ready(function () {
  var icons = $(".icon");
  var orbits = $(".orbit");

  var radius1 = 30;
  var radius2 = 50;
  var radius3 = 70;

  var angle1 = 0;
  var angle2 = 0;
  var angle3 = 0;

  var isMoving = true;

  function updatePosition() {
    if (isMoving) {
      var x1 = radius1 * Math.cos(angle1);
      var y1 = radius1 * Math.sin(angle1);
      icons.eq(0).css({
        top: "calc(50% - " + y1 + "%)",
        left: "calc(50% + " + x1 + "%)",
      });

      var x2 = radius2 * Math.cos(angle2);
      var y2 = radius2 * Math.sin(angle2);
      icons.eq(1).css({
        top: "calc(50% - " + y2 + "%)",
        left: "calc(50% + " + x2 + "%)",
      });
      var x3 = radius3 * Math.cos(angle3);
      var y3 = radius3 * Math.sin(angle3);
      icons.eq(2).css({
        top: "calc(50% - " + y3 + "%)",
        left: "calc(50% + " + x3 + "%)",
      });

      angle1 += 0.06; // Change the rotation speed by adjusting this value
      angle2 += 0.04; // Change the rotation speed by adjusting this value
      angle3 += 0.02; // Change the rotation speed by adjusting this value
    }

    requestAnimationFrame(updatePosition);
  }

  $(".move").on("click", function () {
    isMoving = true;
  });

  $(".stop").on("click", function () {
    isMoving = false;
  });

  updatePosition();
});
