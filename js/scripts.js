$(document).ready(function() {
  $('input[type="radio"]').click(function() {
    // const animal= $("input:radio[name=creature]:checked").val();
      let value = $(this).attr("value");
      if (value === "snake") {
        $("#bearinfo").hide();
        $("#eagleinfo").hide();
        $("#snakeinfo").show();
      } else if (value === "bear"){
        $("#eagleinfo").hide();
        $("#snakeinfo").hide();
        $("#bearinfo").show();
      } else if (value === "eagle"){
        $("#snakeinfo").hide();
        $("#bearinfo").hide();
        $("#eagleinfo").show();
        }
      });
    });

  // $(".clickable2").click(function() {
  //   $("#hide2").toggle();
  //   $("#show2").toggle();
  // });
  // $(".clickable3").click(function() {
  //   $("#hide3").toggle();
  //   $("#show3").toggle();
  // });


