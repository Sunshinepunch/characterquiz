$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();
    let answer1 = parseInt($("input:radio[name=NAMEGOESHERE]:checked").val());
    let answer2 = parseInt($("input:radio[name=NAMEGOESHERE]:checked").val());
    let answer3 = parseInt($("input:radio[name=NAMEGOESHERE]:checked").val());
    let result = parseInt((answer1 + answer2 + answer3));

    if (result <=3) {
      $("#harry").show();
    } else if (result >3 || <= 7) {
      $("#ron").show();
    } else if (result >7) {
      $("#hermione").show();
    }

  });
});